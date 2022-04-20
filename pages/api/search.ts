import type { NextApiRequest, NextApiResponse } from 'next'
import type Breed from 'types/breed'
import type Result from 'types/result'

const handler = async (request: NextApiRequest, response: NextApiResponse<Result[]>) => {
	let { query = '' } = request.query

	if (typeof query !== 'string') query = query.toString()

	const url = `${process.env.API_URL}/breeds/${query.trim() ? `search?q=${query}` : ''}`

	const responseResults = await fetch(url)
	const results: Breed[] = await responseResults.json()

	const normalizedResults = results.map(({ id, name }) => ({ id, name }))

	response.status(200).json(normalizedResults)
}

export default handler
