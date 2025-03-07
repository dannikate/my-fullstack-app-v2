// app.js 

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes 
app.get('/', (req, res) => {
    res.send('hello from the backend!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'a message the backend :-)' });
});

export default app;