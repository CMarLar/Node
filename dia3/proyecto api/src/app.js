const express = require ('express');
const cors = require ('cors');
//importa las rutas y los errores
const professionalRouters = require("./routers/professional.routers");
const professionalsRouters = require("./routers/professionals.routers");
const errorHandling = require("./error/errorHandling");

const app = express();//llamamos a la variable express que tiene como valor la importación de express
//con app.método(), accedemos a los métodos propios de express, que están en la variable app (app es un objeto)

app.set("port",process.env.PORT || 3000)//determina el puerto como el 3000 o otro dado por process.environment, que no sé muy bien lo que es.

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(professionalRouters);
app.use(professionalsRouters);
app.use(function (req,res,next){
    res.status(404).json({error: true, codigo: 404, mensaje: "Endpoint not found"})
});

app.use(errorHandling);

module.exports = app;

