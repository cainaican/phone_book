import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'
import { pool } from "../utils/db"



type Contact = {
  id: number,
  name: string,
  phone: string,
}
//GET all contacts
export const getContacts = asyncHandler(async (req: Request, res: Response): Promise<any> => {
  
    const client = await pool.connect()
    const sql = 'SELECT * FROM contacts;'

    const { rows }  = await client.query(sql)
    const contacts: Contact[] = rows

    return res.status(200).json(contacts)
})


//POST new contact
export const createContacts = asyncHandler(async (req: Request, res: Response): Promise<any> => {

  const client = await pool.connect()
  const sql = 'INSERT INTO contacts (name, phone) VALUES ($1, $2) RETURNING *;'

  const { rows } = await client.query(sql, [req.body.name, req.body.phone])
  const contacts: Contact[] = rows
  
  client.release();

  return res.status(201).json(contacts)
})


//PUT:id request for updating contact
export const updateContact = asyncHandler(async (req: Request, res: Response): Promise<any> => {

  const client = await pool.connect()
  const sql = 'UPDATE contacts SET name=$1, phone=$2 WHERE id=$4 RETURNING *;'

  const { rows } = await client.query(sql, [req.body.name, req.body.phone, req.params.id])
  const contacts: Contact[] = rows
  
  client.release()

  if (contacts) {
    return res.status(200).json(contacts)
  } else {
    return res.status(400).end()
  }
})


//DELETE new contact
export const deleteContact = asyncHandler(async (req: Request, res: Response): Promise<any> => {

  const client = await pool.connect()
  const sql = 'DELETE FROM contacts WHERE id=$1 RETURNING *;'

  const { rowCount } = await client.query(sql, [req.body.name, req.body.phone, req.params.id])
   
  client.release();

  if (rowCount) {
    return res.status(200).json(rowCount)
  } else {
    return res.status(400).end()
  }
})