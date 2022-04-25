"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.createContacts = exports.getContacts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = require("../utils/db");
exports.getContacts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield db_1.pool.connect();
    const sql = 'SELECT * FROM contacts;';
    const { rows } = yield client.query(sql);
    const contacts = rows;
    return res.status(200).json(contacts);
}));
exports.createContacts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield db_1.pool.connect();
    const sql = 'INSERT INTO contacts (name, phone) VALUES ($1, $2) RETURNING *;';
    const { rows } = yield client.query(sql, [req.body.name, req.body.phone]);
    const contacts = rows;
    client.release();
    return res.status(201).json(contacts);
}));
exports.updateContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield db_1.pool.connect();
    const sql = 'UPDATE contacts SET name=$1, phone=$2 WHERE id=$4 RETURNING *;';
    const { rows } = yield client.query(sql, [req.body.name, req.body.phone, req.params.id]);
    const contacts = rows;
    client.release();
    if (contacts) {
        return res.status(200).json(contacts);
    }
    else {
        return res.status(400).end();
    }
}));
exports.deleteContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield db_1.pool.connect();
    const sql = 'DELETE FROM contacts WHERE id=$1 RETURNING *;';
    const { rowCount } = yield client.query(sql, [req.body.name, req.body.phone, req.params.id]);
    client.release();
    if (rowCount) {
        return res.status(200).json(rowCount);
    }
    else {
        return res.status(400).end();
    }
}));
