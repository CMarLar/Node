const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


readConsole(function (obj){
    writeAndRead("objeto.json",obj)
});
