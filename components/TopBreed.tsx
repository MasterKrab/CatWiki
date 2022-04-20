import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import blurImage from 'utils/blurImage'

interface TopBreedProps {
	name: string
	description: string
	image: string
	position: number
}

const TopBreed = ({ name, description, image, position }: TopBreedProps) => {
	const router = useRouter()

	const handleClick = () => {
		router.push(`/breed/${name}`)
	}

	const handleMouseEnter = () => {
		router.prefetch(`/breed/${name}`)
	}

	return (
		<>
			<li onClick={handleClick} onMouseEnter={handleMouseEnter}>
				<article className="breed">
					<div className="breed__image">
						<Image
							src={image}
							alt={name}
							width={170}
							height={170}
							placeholder="blur"
							objectFit="cover"
							blurDataURL={blurImage}
						/>
					</div>
					<div>
						<h2 className="breed__title">
							<Link href={`/breed/${name}`}>
								<a className="breed__link">
									<span aria-hidden="true">{position}. </span>
									{name}
								</a>
							</Link>
						</h2>
						<p className="breed__text">{description}</p>
					</div>
				</article>
			</li>
			<style jsx>{`
				.breed {
					display: grid;
					grid-template-columns: 1fr;
					gap: 1rem;
					cursor: pointer;
				}

				@media screen and (min-width: 48rem) {
					.breed {
						grid-template-columns: 170px 1fr;
						gap: 2.875rem;
					}
				}

				.breed__image {
					width: 170px;
					border-radius: 1.5rem;
					overflow: hidden;
				}

				.breed__title {
					margin-top: 0;
					margin-bottom: 1.5rem;
				}

				@media screen and (min-width: 48rem) {
					.breed__title {
						font-size: 2.25rem;
					}
				}

				.breed__text {
					margin-top: 0;
				}

				@media screen and (min-width: 48rem) {
					.breed__text {
						font-size: 1.125rem;
					}
				}

				.breed__link {
					color: inherit;
					text-decoration: none;
				}
			`}</style>
		</>
	)
}

export default TopBreed
