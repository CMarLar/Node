
//https://www.geeksforgeeks.org/node-js-readline-module/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

let obj = {name: "", surname: "", age: ""};

rl.question("Name?", (name) => {
    obj.name = name;
    console.log(obj);

    rl.question("Surname?", (surname) => {
        obj.surname = surname;
        console.log(obj);

        rl.question("Age?", (age) => {
            obj.age = age;
            console.log(obj);
            console.log("The object is complete");
            rl.close()

            fs.writeFile("objeto.json", JSON.stringify(obj), function (){

                fs.readFile("objeto.json","utf8",(function (err,data){console.log(JSON.parse(data));}));
                
            });
        
        });
        
        
    });

});







// //WRITES
// const fs = require('fs');
// fs.writeFile("objeto.json", JSON.stringify(obj), function (){
// //documentación: https://www.geeksforgeeks.org/node-js-fs-writefile-method/

//     //READS
//     fs.readFile("objeto.json","utf8",(function (err,data){console.log(JSON.parse(data));}));
//     //https://www.geeksforgeeks.org/node-js-fs-readfile-method/
// });

