const http = require('http');
const path = require('path');
const fs= require("fs");
const { emitWarning } = require('process');
const cors = require('cors')



const server = http.createServer((req, res)=> {
    console.log(req.url)

    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    if(req.url == "/") {
        fs.readFile(path.join(__dirname, 'public', 'Assignment4','index.html'), 
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.end(content, 'utf-8');
        })
    }
    else if(req.url == "/manali-1.jpg") {
        fs.readFile(path.join(__dirname, 'public','Assignment4', 'manali-1.jpg'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 
    else if(req.url == "/index.html") {
        fs.readFile(path.join(__dirname, 'public','Assignment4', 'index.html'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 
    else if(req.url == "/nerd.png") {
        fs.readFile(path.join(__dirname, 'public','Assignment4', 'nerd.png'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 
    else if(req.url == "/radio-checked.png") {
        fs.readFile(path.join(__dirname, 'public','Assignment4', 'radio-checked.png'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 
    else if(req.url == "/radio-unchecked.png") {
        fs.readFile(path.join(__dirname, 'public','Assignment4', 'radio-unchecked.png'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 
    else if (req.url == "/api") {
        fs.readFile(path.join(__dirname, 'public', 'db.json'), 
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'application/json', 'mode': 'no-cors'});
            res.end(content, 'utf-8');
        })
    }
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), 
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        })
    }


});

const PORT = process.env.PORT || 7547;
server.listen(PORT, ()=> console.log(`Our server is working at ${PORT}`));