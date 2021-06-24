import express from 'express';
import {Person} from './person';
const app = express();
const person = new Person();
person.eat();

app.listen(8080, () => console.log("server running in 8080"));