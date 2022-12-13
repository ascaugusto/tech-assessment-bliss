import axios from 'axios'
import { MOCK_API_URL } from '../utils/constants'

export const getHealthStatus = async () => {
	try {
		const response = await axios.get(`${MOCK_API_URL}/health`)
		return response?.data		
	} catch (error) {
		console.log('getHealthStatus-error', error)
		return { data: { status: 'error' } }
	}
}

export const getAllQuestions = async () => {
	try {
		const response = await axios.get(`${MOCK_API_URL}/questions`)
		return response?.data
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
		const response = await axios.post(`${MOCK_API_URL}/share`, {
			destination_email: email,
			content_url: url
		})
		return response?.data
	} catch (error) {
		console.log('shareURL-error', error)
		return {status: 404}
	}
}