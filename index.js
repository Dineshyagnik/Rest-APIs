const http = require("http");
// const fs = require("fs");
// const url = require('url');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.end('Hello from Home page');
});

app.get('/about', (req, res) => {
    return res.end('Hello from About page' + ' Hey ' + req.query.name + ' your age is ' + req.query.age);
});




// function myHandler(req, res) {
//     if (req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);

//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/':
//                 if (req.method === 'GET') res.end('Home Page');
//                 break;
//             case '/about':
//                 const username = myUrl.query.myname
//                 res.end(`Hi ${username}`);
//                 break;
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end('Here are your results for ' + search);
//                 break;
//             case '/contact': res.end('Contact Page')
//                 break;
//             case '/signup':
//                 if (req.method === 'GET') res.end('This is a signup form');
//                 else if (req.method === 'POST') {
//                     //DB Query
//                     res.end('Signup Successfull');
//                 }
//             default: res.end('404 not found')
//         }
//     });
// }

// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//     console.log("server started");
// });

app.listen(8000, () => console.log('server started'));
