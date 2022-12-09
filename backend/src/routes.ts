import { Router } from 'express'
import { QuestionGet } from './controllers/QuestionController'

const routes = Router()

routes.get('/questions', QuestionGet)

export default routes