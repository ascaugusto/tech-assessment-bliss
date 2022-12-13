import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(routes)

app.listen(3333)