"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./utils/config");
const middleware_1 = require("./utils/middleware");
const contactRouter_1 = __importDefault(require("./routes/contactRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('build'));
app.use(middleware_1.requestLogger);
app.use('/api/contacts', contactRouter_1.default);
app.use('/*', express_1.default.static('build'));
app.use(middleware_1.unknownEndpoint);
app.use(middleware_1.errorHandler);
app.listen(config_1.PORT, () => {
    console.log(`Server running on ${config_1.IP}:${config_1.PORT}`);
});
