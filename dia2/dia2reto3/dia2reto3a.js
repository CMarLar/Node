const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs/promises');

function pregunta (pregunta) {
    const question = new Promise ((resolve,reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output:process.stdout
        });
    rl.question(pregunta, (respuesta) => {
        resolve(respuesta);
        rl.close();
    });//cierre función linea 11
});//cierre función de la línea 6
return question;
}

let obj = {name: "", surname: "", age: ""};

pregunta("Name?")


.then( (name) => {
    obj.name = name;
    return pregunta("Surname?")
})
.then ( (surname) => {
    obj.surname = surname;
    return pregunta("Age?")
})
.then ( (age) => {
    obj.age = age;
    return fs.writeFile("objeto.json", JSON.stringify(obj));
})
.then( () => {
    return fs.readFile("objeto.json","utf8")
})
.then ((data) =>{
    console.log(JSON.parse(data))
})
.catch( (err) => {
    console.log(err);
})