var fs = require("fs");

// fs.readFile('./doc/input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

fs.readFile('./doc/input.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("程序执行结束!");