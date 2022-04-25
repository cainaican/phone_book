import express from 'express'
import cors from 'cors'
import {IP, PORT} from './utils/config'
import { errorHandler, requestLogger, unknownEndpoint } from './utils/middleware'
import contactRouter from './routes/contactRouter'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(requestLogger)

app.use('/api/contacts', contactRouter)
app.use('/*', express.static('build'))

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${IP}:${PORT}`)
})