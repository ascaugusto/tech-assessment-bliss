import { test, expect, describe, it } from 'vitest'
import request from 'supertest';
import express from 'express';
import routes from '../routes';
import { getAllQuestions } from '../services';
import { questionType } from './QuestionModels';

const app = express()
app.use('/', routes)

describe('Health check', () => {
  it('Health should be ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({ status: 'OK' })
  })
  
  it('Health should be is not ok', async () => {
    const res = await request(app).get('/health')
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({ status: 'error' })
  })
})

describe('Fetch questions', () => {
  it('Fetch all questions when having no filter', async () => {
    const allQuestions = await getAllQuestions()
    const res = await request(app).get('/questions').query({
      filter: ''
    })
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(allQuestions.length)
  })

  it('Should return only the filtered questions', async () => {
    const requestFilter = 'Ruby'
    const res = await request(app).get('/questions').query({
      filter: requestFilter,
      offset: 1,
      limit: 10
    })
    expect(res.statusCode).toBe(200);
    const filtedQuestion: questionType[] = []
    res.body.filter((questionItem: questionType)  => {
      if (questionItem.question.includes(requestFilter)) {
        filtedQuestion.push(questionItem)
      } else {
        questionItem.choices.forEach(choiceItem => {
          if (choiceItem.choice.includes(requestFilter)){
            filtedQuestion.push(questionItem)
          }
        }) 
      }
    })
    expect(filtedQuestion.length).toBeGreaterThan(0)
  })

  it('Should return no question found', async () => {
    const requestFilter = 'Test'
    const res = await request(app).get('/questions').query({
      filter: requestFilter
    })
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({ statusMessage: 'No questions found!' })
  })
})

describe('Fetch question by id', () => {
  it('Shoul return a question', async () => {
    const res = await request(app).get('/question').query({
      id: 1
    })
    expect(res.body.length).toBe(1)
  })
})

describe('Share URL', () => {
  it('Should return the params is empty', async () => {
    const res = await request(app).post('/share')
    expect(res.text).toStrictEqual('The params is empty!')
  })
})
