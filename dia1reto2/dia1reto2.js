let obj = {name: "Carlos",surname: "Marina",age: 36}//vsc me dice que name es una propiedad deprecada.

//documentación: https://www.geeksforgeeks.org/node-js-fs-writefile-method/

const fs = require('fs');
fs.writeFile("objeto.json", JSON.stringify(obj), function (){

    //https://www.geeksforgeeks.org/node-js-fs-readfile-method/
    fs.readFile("objeto.json","utf8",(function (err,data){console.log(JSON.parse(data));}));
    
});


