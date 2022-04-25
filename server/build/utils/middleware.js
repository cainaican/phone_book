"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.unknownEndpoint = exports.requestLogger = void 0;
const requestLogger = (req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:  ', req.path);
    console.log('Body:', req.body);
    console.log('------');
    next();
};
exports.requestLogger = requestLogger;
const unknownEndpoint = (req, res) => {
    console.log('unknown endpoint');
    res.status(400).send({ error: 'unknown endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: err.message });
    next();
};
exports.errorHandler = errorHandler;
