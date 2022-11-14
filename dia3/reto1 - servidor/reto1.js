/*
Los retos se deben hacer en la rama dia3 subir los cambios y hacer el merge con la rama master.
Crea un servidor web con el módulo express que realice las siguientes tareas:

1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
cliente.

2. Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.

3. Le retorne al usuario un mensaje del tipo application/json con el status code 200 y un mensaje con
este contenido: { ok: true, message: ‘Recibido!’ }

4. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
mensaje con este contenido: { ok: true, message: ‘Adios!’ }

5. Comprobar su funcionamiento con Postman.
*/

const express= require('express');
const app = express();


app.get('/', function (req, res){
    //2
    console.log("URL: " + req.url)
    console.log("Method: " + req.method)
    console.log("User Agent: " + req.headers["user-agent"]);//user agent es una string dentro de los headers
    //1
    res.send("Petición recibida del cliente")
    //3
    res.status(200).json({ok:true, message: "Recibido!"})
})
//4
app.get('/bye', function (req,res){
    res.status(200).json({ok:true,message:"Adiós!"})
})

app.listen(3000);