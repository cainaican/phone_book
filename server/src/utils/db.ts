import { Pool } from 'pg'
import { DB_HOST, DB_NAME, DB_PORT, DB_PW, DB_USER } from './config'

export const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PW,
  port: DB_PORT
})