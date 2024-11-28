const fs = require('fs');

// Sync...
//  fs.writeFileSync("./Test.txt",'"Hey There');

// Async...
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
fs.mkdirSync("my-docss/a/b",{recursive:true});


