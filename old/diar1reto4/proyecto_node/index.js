const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


function mainFunction(path,obj,callback){
    writeAndRead(path,obj);
    readConsole(callback);
}

mainFunction("objeto.json",{},console.log);
