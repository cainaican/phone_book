import { Router } from "express"
import { createContacts, deleteContact, getContacts, updateContact } from "../controllers/contactControllers"

const contactRouter = Router()

contactRouter.get('/', getContacts)
contactRouter.post('/', createContacts)
contactRouter.put('/:id', updateContact)
contactRouter.delete('/:id', deleteContact)

export default contactRouter