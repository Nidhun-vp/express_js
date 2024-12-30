const cron=require('node-cron');
const express=require('express');
const http=require('http');

const host='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello world');

});

server.listen(port,host,()=>{
    console.log(`web server running at http://${host}:${port}`);

    cron.schedule('* * * * * *',()=>{                       // * * * *-minute, * * * * * * * *-second
        console.log('running at scheduled task every second');
    });
});
