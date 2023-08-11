import express from 'express';
import router from './routers/Router.js';
import cors from 'cors';

const port = 3001
const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(port, ()=> console.log('Server is Running'));