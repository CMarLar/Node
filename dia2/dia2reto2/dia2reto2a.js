const fs = require('fs/promises');
// const fs = require('fs');

//no es necesario importar fs cuando importas fs/promises

let obj = {name: "Carlos",surname: "Marina",age: 36};

fs.writeFile("objeto.json", JSON.stringify(obj))//se cierra el primer método de promesas.

.then( () => {//primer .then
    return fs.readFile("objeto.json","utf8")//devuelve la función que iría en el callback.
})
.then ((data) =>{//coge como parámetro data
    console.log(JSON.parse(data))//usa el parámetro
})
.catch((err) => {//coge como parámetro error
    console.log(err);
})

//el último then y catch utilizan los parámetros de lo que sería una función anónima con parámetros (err,data) -> ver reto día anterior








