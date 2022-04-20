import type BreedImage from 'types/breed-image'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import blurImage from 'utils/blurImage'

const BreedItem = ({ name, image: { url, width, height } }: BreedImage) => {
	const router = useRouter()

	const handleClick = () => {
		router.push(`/breed/${name}`)
	}

	const handleMouseEnter = () => {
		router.prefetch(`/breed/${name}`)
	}

	return (
		<>
			<li onClick={handleClick} onMouseEnter={handleMouseEnter} className="breed">
				<figure className="breed__figure">
					<div className="breed__image-container">
						<Image
							src={url}
							alt={name}
							width={width}
							height={height}
							className="breed__image"
							layout="raw"
							placeholder="blur"
							blurDataURL={blurImage}
						/>
					</div>
					<figcaption className="breed__figcaption">
						<Link href={`/breed/${name}`}>
							<a className="breed__link">{name}</a>
						</Link>
					</figcaption>
				</figure>
			</li>
			<style jsx>{`
				.breed {
					cursor: pointer;
				}

				.breed:first-child .breed__image-container::before {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					z-index: 10;
					background-color: var(--quinary-color);
					width: 2.935rem;
					height: 79%;
					transform: translate(-15%, -50%);
					border-radius: 0.875rem;
				}

				@media screen and (min-width: 48rem) {
					.breed:first-child .breed__image-container::before {
						transform: translate(-33%, -50%);
					}
				}

				.breed__figure {
					margin: 0;
				}

				.breed__image-container {
					position: relative;
					width: var(--breed-image-size);
					height: var(--breed-image-size);
				}

				@media screen and (min-width: 21.875rem) {
					.breed__image-container {
						height: 8.375rem;
					}
				}

				@media screen and (min-width: 30rem) {
					.breed__image-container {
						height: 15rem;
					}
				}

				@media screen and (min-width: 76.25rem) {
					.breed__image-container {
						height: 13.75rem;
					}
				}

				.breed :global(.breed__image) {
					position: relative;
					z-index: 100;
					width: 100%;
					height: 100%;
					border-radius: 0.75rem;
					object-fit: cover;
				}

				.breed__figcaption {
					margin-top: 0.723rem;
				}

				.breed__link {
					font-weight: 600;
					font-size: 0.75rem;
					text-decoration: none;
					color: var(--cuaternary-color);
				}

				@media screen and (min-width: 49rem) {
					.breed__link {
						font-size: 1.125rem;
					}
				}
			`}</style>
		</>
	)
}

export default BreedItem
