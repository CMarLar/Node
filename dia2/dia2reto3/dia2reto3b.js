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

async function writeAndRead () {
    try{
    let pregunta1 = await pregunta("Name?")
    obj.name = pregunta1;
    let pregunta2 = await pregunta("Surname?")
    obj.surname = pregunta2;
    let pregunta3 = await pregunta("Age?")
    obj.age = pregunta3;
    fs.writeFile("objeto.json", JSON.stringify(obj))
    let data = await fs.readFile('objeto.json','utf-8')
    console.log(JSON.parse(data))
    }
    catch (error){
        console.log(error);
    }
}

writeAndRead()