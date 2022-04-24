import { RequestHandler } from "express";

export const requestLogger: RequestHandler = (req, res, next) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:', req.body)
  console.log('------')
}