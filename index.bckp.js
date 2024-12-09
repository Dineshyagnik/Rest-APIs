// const http = require("http");
// // const fs = require("fs");
// // const url = require('url');
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     return res.end('Hello from Home page');
// });

// app.get('/about', (req, res) => {
//     return res.end('Hello from About page' + ' Hey ' + req.query.name + ' your age is ' + req.query.age);
// });




// // function myHandler(req, res) {
// //     if (req.url === '/favicon.ico') return res.end();
// //     const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
// //     const myUrl = url.parse(req.url, true);
// //     console.log(myUrl);

// //     fs.appendFile("log.txt", log, (err, data) => {
// //         switch (myUrl.pathname) {
// //             case '/':
// //                 if (req.method === 'GET') res.end('Home Page');
// //                 break;
// //             case '/about':
// //                 const username = myUrl.query.myname
// //                 res.end(`Hi ${username}`);
// //                 break;
// //             case '/search':
// //                 const search = myUrl.query.search_query;
// //                 res.end('Here are your results for ' + search);
// //                 break;
// //             case '/contact': res.end('Contact Page')
// //                 break;
// //             case '/signup':
// //                 if (req.method === 'GET') res.end('This is a signup form');
// //                 else if (req.method === 'POST') {
// //                     //DB Query
// //                     res.end('Signup Successfull');
// //                 }
// //             default: res.end('404 not found')
// //         }
// //     });
// // }

// // const myServer = http.createServer(app);

// // myServer.listen(8000, () => {
// //     console.log("server started");
// // });

// app.listen(8000, () => console.log('server started'));




const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();

const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('Middleware 1');
    // return res.json({msg:"Middleware 1"});
    req.myUserName = 'Dineshyagnik';
    fs.appendFile('log.txt',`${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,(err,data)=>{
        next();
    });
});

app.use((req, res, next) => {
    console.log('middleware 2',req.myUserName);
    // return res.end('hey');
    next();
});

//routes

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html)
});

// Rest API
app.get('/api/users', (req, res) => {
    res.setHeader('X-myName','Dinesh Kumar'); // custom header
    // console.log(req.headers);
    
    return res.json(users);
});

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({err : "User not found"})
    return res.json(user);
}).patch((req, res) => {
    // Edit user with id
    return res.json({ status: "pending" })
})
    .delete((req, res) => {
        //Delete user with id
        return res.json({ status: "pending" })
    });


app.post('/api/users', (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "Please fill all fields" });
    }
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: 'success', id: users.length });
    });
});


// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

// app.post('/api/users',(req,res)=>{
//     // TO Do Create new user
//     return res.json({status:'pending'});
// });

// app.patch('/api/users/:id',(req,res)=>{
//     // TO Do Edit the user with id
//     return res.json({status:'pending'});
// });

// app.delete('/api/users/:id',(req,res)=>{
//     // TO Do Delete the user with id
//     return res.json({status:'pending'});
// });




app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));