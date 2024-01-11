import 'express-async-errors'
import express, { Application, json } from 'express'
import { routes } from './routers'
import cors from 'cors'
import { handleErrors } from './middlewares/handleErrors.middlewares'

export const app: Application = express()

app.use(cors())

app.use(json())

app.use(routes)
app.use(handleErrors)
