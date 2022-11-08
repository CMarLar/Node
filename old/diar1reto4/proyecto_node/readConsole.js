
function readConsole(callback){

    //importaciones de readline
    const readline = require('readline');
    const rl = readline.createInterface(process.stdin, process.stdout);
    const fs = require('fs');

    
let obj = {};

rl.question("Name?", (name) => {
    obj.name = name;
    // console.log(obj);

    rl.question("Surname?", (surname) => {
        obj.surname = surname;
        // console.log(obj);

        rl.question("Age?", (age) => {
            obj.age = age;
            // console.log(obj);
            console.log("Object complete");
            rl.close();

                callback(obj)//lo último que hacemos es aplicar el parámetro callback al objeto, que tiene que ser una función.
                

        });
        
    });

});
//fin readConsole
}

// readConsole(function (obj){
//     console.log(obj.age);
// });


module.exports = {readConsole};