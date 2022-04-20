import type Photo from 'types/photo'
import Image from 'next/image'
import resetList from 'styles/resetList'
import blurImage from 'utils/blurImage'

interface OtherPhotos {
	photos: Photo[]
}

const OtherPhotos = ({ photos }: OtherPhotos) => (
	<>
		<section>
			<h2 className="title">Other photos</h2>
			<ul className="photos">
				{photos.map(({ url, width, height, alt }) => (
					<li key={url} className="photo">
						<Image
							src={url}
							alt={alt}
							width={width}
							height={height}
							placeholder="blur"
							blurDataURL={blurImage}
							objectFit="cover"
						/>
					</li>
				))}
			</ul>
		</section>
		<style jsx>{resetList}</style>
		<style jsx>{`
			.title {
				margin-top: 2.5rem;
				margin-bottom: 2.5rem;
				font-size: 1.5rem;
				color: var(--cuaternary-color);
			}

			@media screen and (min-width: 48rem) {
				.title {
					margin-top: 5.014rem;
					font-size: 2.25rem;
				}
			}

			.photos {
				display: grid;
				justify-content: space-evenly;
				grid-template-columns: repeat(auto-fill, 17.375rem);
				grid-auto-rows: 17.375rem;
				gap: 3.237rem 2rem;
			}

			@media screen and (min-width: 81.25rem) {
				.photos {
					justify-content: space-between;
				}
			}

			.photo {
				display: flex;
				border-radius: 1.5rem;
				overflow: hidden;
			}
		`}</style>
	</>
)

export default OtherPhotos
