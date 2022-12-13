import { Router } from 'express'
import { GetQuestions, HealthStatus, ShareUrl } from './controllers/QuestionController'

const routes = Router()

routes.get('/questions', GetQuestions)
routes.get('/health', HealthStatus)
routes.post('/share', ShareUrl)

export default routes