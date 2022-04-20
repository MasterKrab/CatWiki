import type BreedImage from 'types/breed-image'
import Metadata from 'components/Metadata'
import Introduction from 'components/Home/Introduction'
import Breeds from 'components/Home/Breeds'
import Information from 'components/Home/Information'
import getMostSearchedBreeds from 'utils/getMostSearchedBreeds'

export const getServerSideProps = async () => {
	const breeds = await getMostSearchedBreeds(4)

	return {
		props: {
			breeds
		}
	}
}

interface HomeProps {
	breeds: BreedImage[]
}

const Home = ({ breeds }: HomeProps) => (
	<>
		<Metadata title="Cat Wiki" />
		<Introduction />
		<Breeds breeds={breeds} />
		<Information />
	</>
)

export default Home
