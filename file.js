const fs = require('fs');

// // Sync... Blocking Request
//  fs.writeFileSync("./Test.txt",'"Hey There');

// // Async... Non Blocking Request
// fs.writeFile("./Test.txt",'"Hey World Async',(err)=>{});

// const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(res);


// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//     if (err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log(res);

//     }
// });

// fs.appendFileSync("./contacts.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./contacts.txt", `${Date.now()} Hey there , How are you ?\n`);

// fs.cpSync("./Test.txt","./Testcopy.txt")

// fs.unlinkSync("./Testcopy.txt");

// console.log(fs.statSync("./Test.txt"));

// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docss/a/b",{recursive:true});

// console.log('1');

// // Blocking Req
// const res = fs.readFileSync("contacts.txt","utf-8");
// console.log(res);
// console.log('2');


const os = require('os');

console.log(os.cpus().length);



// console.log('1');

// // Non Blocking Req
// fs.readFile("Test.txt","utf-8",(err,result)=>{
//     console.log(result);
// });
// console.log('2');
// console.log('3');
// console.log('4');



