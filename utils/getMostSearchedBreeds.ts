import type Breed from 'types/breed'
import type BreedImage from 'types/breed-image'
import type BreedImageResponse from 'types/breed-image-response'

const getMostSearchedBreeds = async (limit: number) => {
	const response = await fetch(`${process.env.API_URL}/breeds?limit=${limit}`)
	const data: Breed[] = await response.json()

	const promises = data.map(async ({ id, name, description }) => {
		const response = await fetch(`${process.env.API_URL}/images/search?breed_id=${id}&limit=1`)
		const { url, width, height }: BreedImageResponse = (await response.json())[0]

		return {
			id,
			name,
			description,
			image: {
				url,
				width,
				height
			}
		}
	})

	const normalizedData: BreedImage[] = await Promise.all(promises)

	return normalizedData
}

export default getMostSearchedBreeds
