import axios from 'axios'
import { MOCK_LOCAL_API_URL, PAGE_SIZE } from '../utils/constants'

export const getHealthStatus = async () => {
	try {
		const response = await axios.get(`${MOCK_LOCAL_API_URL}/health`)
		return response		
	} catch (error) {
		console.log('getHealthStatus-error', error)
		return { data: { status: 'error' } }
	}
}

export type getListAllQuestionsRequest = {
	limit: number
	offset: number,
	filter: string
}

export const getListAllQuestions = async ({ limit, offset, filter }: getListAllQuestionsRequest) => {
	try {
		const response = await axios.get(`${MOCK_LOCAL_API_URL}/questions?limit=${limit}&offset=${offset}&filter=${filter}`)
		return response
	} catch (error) {
		console.log('getListAllQuestions-error', error)
		return { data: [] }
	}
}

export type shareURLType = {
	url: string,
	email: string
}

export const shareURL = async ({url, email}: shareURLType) => {
	try {
		const response = await axios.post(`${MOCK_LOCAL_API_URL}/share`, {
			destination_email: email,
			content_url: url
		})
		return response
	} catch (error) {
		console.log('shareURL-error', error)
		return {status: 404}

	}
}