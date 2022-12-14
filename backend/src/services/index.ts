import axios from 'axios'
import nodemailer from "nodemailer";

import { MOCK_API_URL } from '../utils/questionsPaginationConstants'
import { ETHEREAL_HOST, ETHEREAL_PORT, ETHEREAL_EMAIL, ETHEREAL_PASSWORD } from '../utils/shareScreenConstants'

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
	content_url: string,
	destination_email: string
}

const transporter = nodemailer.createTransport({
	host: ETHEREAL_HOST,
	port: ETHEREAL_PORT,
	auth: {
			user: ETHEREAL_EMAIL,
			pass: ETHEREAL_PASSWORD
	}
});

export const shareURL = async ({ content_url, destination_email}: shareURLType) => {
	try {
		const info = await transporter.sendMail({
			from: 'Ethereal Email <info@ethereal.email>',
			to: destination_email,
			subject: 'Share Screen',
			text: `Share screen URL ${content_url}`,
			html: "<strong>Hello world?</strong>",
			headers: { 'x-myheader': 'test header' }
		});

		const response = await axios.post(`${MOCK_API_URL}/share`, {
			destination_email: destination_email,
			content_url: content_url
		})
		return response?.data
	} catch (error) {
		console.log('shareURL-error', error)
		return {status: 404}
	}
}