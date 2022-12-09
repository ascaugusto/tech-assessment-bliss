import { Router } from 'express'
import QuestionController from './controllers/QuestionController'

const routes = Router()

routes.get('/questions', QuestionController.index)

export default routes