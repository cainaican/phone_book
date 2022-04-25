import { ErrorRequestHandler, RequestHandler } from "express";
import { Request, Response } from "express"


export const requestLogger: RequestHandler = (req, res, next) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:', req.body)
  console.log('------')
  next()
}

// //middleware for testing unhandled endpoints
export const unknownEndpoint = (req: Request, res: Response) => {

  console.log('unknown endpoint')

  res.status(400).send({ error: 'unknown endpoint' });
};


export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({ error: err.message });
  next()
};
