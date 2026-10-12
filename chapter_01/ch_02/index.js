const http = require('http');

const express = require('express');
// const routes = require('./routes');
// console.log(routes.someText);
const app = express();
app.use((req,res,next)=>{
    console.log('first test');
    next();
});app.use((req,res,next)=>{
    console.log('secand test');
    // next();
});

const server = http.createServer(app);

server.listen(3000);
