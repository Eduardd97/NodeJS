const os = require("os");
const fs = require("fs");
const { json } = require("stream/consumers");
//creating files
// fs.appendFile("text-file.txt", "Hello, Node.js", (err) => {
//     if (err) console.log();

//     console.log("File was created");
// });

// console.log(os.platform(), "platform");
// console.log(os.homedir(), "homedir");
// console.log(os.hostname(), "hostname");
// console.log(os.machine(), "machine");
// console.log(os.userInfo(), "userInfo");

// console.log(os.networkInterfaces(), "networkInterfaces");

// function main(a, b, c) {
//     return a + b + c;
// }

// const sum = main(10, 20, 30);
// console.log(sum);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => {
//         const sringifiedJson = JSON.stringify(json);

//         fs.appendFile("response.json", sringifiedJson, (err) => {
//             if (err) console.log(err, "err");
//         });
//     });

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => {
//         json.forEach((user) => {
//             const userSringifiedJson = JSON.stringify(user);
//             fs.appendFile(
//                 `${user.name}.json`,
//                 userSringifiedJson,
//                 (err) => err && console.log(err)
//             );
//         });
//     });
// let n = 0;
// setInterval(() => {
//     n += 5;
//     console.log(`Now counter is: ${n}`);
// }, 5000);

// fs.appendFile("file/test.txt", "Test", (err) => console.log(err));

// fs.mkdir("files", (err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => {
//         json.forEach((user) => {
//             const userSringifiedJson = JSON.stringify(user);
//             fs.appendFile(
//                 `files/${user.name}.json`,
//                 userSringifiedJson,
//                 (err) => err && console.log(err)
//             );
//         });
//     });

// fs.unlink("test.txt", (err)  => console.log(err));
// fs.unlink("text-file.txt", (err)  => console.log(err));
