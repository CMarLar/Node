const { readConsoleThenCatch } = require("./readConsole.js");
// const { readConsoleAsyncAwait } = require("./readConsole.js");
const { writeAndReadThenCatch } = require("./writeAndReadObject.js");
// const { writeAndReadAsyncAwait } = require("./writeAndReadObject.js");


readConsoleThenCatch(function (obj){
    writeAndReadThenCatch("objeto.json",obj)
});




