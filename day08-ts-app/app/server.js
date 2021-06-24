"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_1 = require("./person");
const app = express_1.default();
const person = new person_1.Person();
person.eat();
app.get("/", (req, res) => {
    res.end("End");
});
app.listen(8080, () => console.log("server running in 8080"));
