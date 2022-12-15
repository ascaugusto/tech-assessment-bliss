import { Router } from 'express'
import { GetQuestionById, GetQuestions, HealthStatus, ShareUrl } from './controllers/QuestionController'

const routes = Router()

routes.get('/questions', GetQuestions)
routes.get('/question', GetQuestionById)
routes.get('/health', HealthStatus)
routes.post('/share', ShareUrl)

export default routes