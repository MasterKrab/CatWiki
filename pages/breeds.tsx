import type BreedImage from 'types/breed-image'
import Metadata from 'components/Metadata'
import TopBreed from 'components/TopBreed'
import resetList from 'styles/resetList'
import getMostSearchedBreeds from 'utils/getMostSearchedBreeds'

export const getServerSideProps = async () => {
	const breeds = await getMostSearchedBreeds(10)

	return {
		props: {
			breeds
		}
	}
}

interface BreedsProps {
	breeds: BreedImage[]
}

const Breeds = ({ breeds }: BreedsProps) => (
	<>
		<Metadata title="Top 10 most searched breeds" />
		<h1 className="title">Top 10 most searched breeds</h1>
		<ol className="breeds">
			{breeds.map(({ id, name, description, image: { url } }, index) => (
				<TopBreed key={id} name={name} description={description} image={url} position={index + 1} />
			))}
		</ol>
		<style jsx>{resetList}</style>
		<style jsx>{`
			.title,
			.breeds {
				color: var(--cuaternay-color);
			}

			.title {
				margin-bottom: 3.289rem;
				font-size: 1.5rem;
			}

			@media screen and (min-width: 48rem) {
				.title {
					font-size: 2.25rem;
				}
			}

			.breeds {
				display: grid;
				grid-template-columns: 1fr;
				gap: 3.438rem;
			}
		`}</style>
	</>
)

export default Breeds
