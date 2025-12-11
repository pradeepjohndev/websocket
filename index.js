/* const express = require('express');
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

import express from 'express';
import 'dotenv/config';
const app = express();

app.use((res, req, next)=>{
    console.log(`router ${req.url} was called`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});

import express from 'express';
const app = express();
const router = express.Router();

router.use((req,res,next) =>{
    console.log(`router ${req.originalUrl} was called`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/router', router);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});


import express from 'express';
import 'dotenv/config';
const PORT = process.env.PORT ;
const app = express();
import cors from 


app.use(express.json(), cors());

app.post('/data', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 3000;
const app = express();


app.get('/', (req, res) => {
  throw new Error('BROKEN');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});


import express from 'express';
const app = express();

app.get('/search', (req, res) => {
    const queryParam = req.query.q;
    if (queryParam) {
        res.send(`Search query: ${queryParam}`);
    } else {
        res.status(400).send('Query parameter "q" is required');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



import express from 'express';
const app = express();

app.get('/headers', (req, res) => {
    const headers = req.headers;
    res.json(headers);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
*/

import express from 'express';
const app = express();

app.get('/text', (req, res) => {
    res.send('Hello, this is a plain text response!');
});

app.get('/html', (req, res) => {
    res.send('<h1>Hello World</h1><p>This is an HTML response.</p>');
    console.log('Sent an HTML response');
});

app.get('/json', (req, res) => {
    res.send({ message: 'This is a JSON response', status: 'Success' });
    console.log('Sent a JSON response');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});




