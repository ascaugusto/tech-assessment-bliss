import { Router } from 'express'
import { QuestionGet, HealthStatus, ShareUrl } from './controllers/QuestionController'

const routes = Router()

routes.get('/questions', QuestionGet)
routes.get('/health', HealthStatus)
routes.post('/share', ShareUrl)

export default routes