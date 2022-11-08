function writeAndRead(path, obj){
    const fs = require('fs');

    fs.writeFile(path, JSON.stringify(obj), function (){

        fs.readFile(path,"utf8",(function (err,data){console.log(JSON.parse(data));}));
        
    });

}

// writeAndRead("calle.json",{calle: "Teruel",número: 8})

module.exports = {writeAndRead};