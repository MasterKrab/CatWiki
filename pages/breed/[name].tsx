import type { GetServerSideProps } from 'next'
import type Breed from 'types/breed'
import type BreedImageResponse from 'types/breed-image-response'
import type Photo from 'types/photo'
import Metadata from 'components/Metadata'
import Image from 'next/image'
import BreedDetails from 'components/BreedDetails'
import OtherPhotos from 'components/OtherPhotos'

export const getServerSideProps: GetServerSideProps = async ({ query: { name } }) => {
	const responseResults = await fetch(`${process.env.API_URL}/breeds/search?q=${name}`)
	const results: Breed[] = await responseResults.json()

	if (!results.length)
		return {
			notFound: true
		}

	const result = results[0]

	const response = await fetch(`${process.env.API_URL}/images/search?breed_id=${result.id}&limit=9`)
	const photos: BreedImageResponse[] = await response.json()

	const normalizedPhotos = photos.map(({ url, width, height }) => ({
		url,
		width,
		height,
		alt: result.name
	}))

	return {
		props: {
			breed: result,
			photos: normalizedPhotos
		}
	}
}

interface BreedInfoProps {
	breed: Breed
	photos: Photo[]
}

const BreedInfo = ({ breed, photos }: BreedInfoProps) => {
	const { url, width, height } = photos[0]
	const { name, description } = breed

	return (
		<>
			<Metadata title={name} description={description} />
			<article className="article">
				<div className="article__image-container">
					<Image
						className="article__image"
						src={url}
						width={width}
						height={height}
						alt={name}
						objectFit="cover"
					/>
				</div>
				<div>
					<h1 className="title">{name}</h1>
					<p className="article__text">{description}</p>
					<BreedDetails {...breed} />
				</div>
			</article>
			<OtherPhotos photos={photos.slice(1)} />
			<style jsx>{`
				.title {
					margin-top: 1rem;
					margin-bottom: 1.563rem;
				}

				@media screen and (min-width: 75rem) {
					.title {
						margin-top: 0;
						font-size: 2.25rem;
					}
				}

				.article {
					display: grid;
					grid-template-columns: 1fr;
					justify-items: center;
					color: var(--cuaternary-color);
				}

				@media screen and (min-width: 75rem) {
					.article {
						grid-template-columns: 1.25fr 2fr;
					}
				}

				.article__image-container {
					position: relative;
					display: flex;
					width: 20rem;
					height: 20rem;
				}

				@media screen and (min-width: 75rem) {
					.article__image-container {
						width: 23.19rem;
						height: 23.19rem;
					}
				}

				.article__image-container::before {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					z-index: -1;
					background-color: var(--quinary-color);
					width: 2.935rem;
					height: 82%;
					transform: translate(-33%, -50%);
					border-radius: 0.875rem;
				}

				.article__image-container :global(.article__image) {
					border-radius: 1.5rem;
				}

				.article__text {
					margin-top: 0;
					margin-bottom: 2.047rem;
					font-size: 1.125rem;
				}
			`}</style>
		</>
	)
}

export default BreedInfo
