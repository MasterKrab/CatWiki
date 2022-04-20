import type { NextApiRequest, NextApiResponse } from 'next'
import type Breed from 'types/breed'
import getRandomElement from 'utils/getRandomElement'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
	const responseResults = await fetch(`${process.env.API_URL}/breeds`)
	const results: Breed[] = await responseResults.json()

	const { vetstreet_url } = getRandomElement(results)

	response.redirect(vetstreet_url)
}

export default handler
