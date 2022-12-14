import { Request, Response } from "express"
import { questionType } from "./QuestionModels"
import { getHealthStatus, getAllQuestions, shareURL } from "../services"

export const HealthStatus = async (req: Request, res: Response) => {
  const healthResponse = await getHealthStatus()
  return res.json(healthResponse)
}

export const GetQuestions = async (req: Request, res: Response) => {
  const limit = req.query.limit || ''
  const offset = req.query.offset
  const filter = req.query.filter
  const questions: questionType[] = await getAllQuestions()
  let newQuetions: questionType[] = questions

  if (offset && isNaN(Number(offset))) {
    res.status(400).send('The offset value must be an number!')
  } else if (limit && isNaN(Number(limit))) {
    res.status(400).send('The limit value must be an number!')
  } 
  else {
    if (offset && limit) {
      const startIndex = (Number(offset) - 1) * Number(limit)
      const endIndex = Number(offset) * Number(limit)
      newQuetions = questions.slice(startIndex, endIndex)
    }
    if (filter && typeof filter === 'string') {
      const filteredQuestions: questionType[] = []
      questions.forEach(questionItem => {
        if (questionItem.question.includes(filter)) {
          filteredQuestions.push(questionItem)
        } else {
          questionItem.choices.forEach(choiceItem => {
            if (choiceItem.choice.includes(filter)){
              filteredQuestions.push(questionItem)
            }
          }) 
        }
        const startIndex = (Number(offset) - 1) * Number(limit)
        const endIndex = Number(offset) * Number(limit)
        newQuetions = filteredQuestions.slice(startIndex, endIndex)
      })
    }
    if (newQuetions.length === 0) {
      res.status(200).send({ statusMessage: 'No questions found!' })
    } else {
      return res.json(newQuetions)
    }
  }
}

export const GetQuestionById = async (req: Request, res: Response) => {
  const id = req.query.id
  const questions: questionType[] = await getAllQuestions()
  const question = questions.filter(question => question.id.toString() === id)
  return res.json(question)
}

export const ShareUrl = async (req: Request, res: Response) => {
  const body = req.body
  if (!body) return res.status(400).end('The params is empty!')
  const healthResponse = await shareURL(body)
  return res.json(healthResponse)
}
