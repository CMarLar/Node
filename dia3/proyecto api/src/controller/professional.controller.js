const { response, request } = require("express");
const {Professional} = require("../classes/professional")

let profesional = null; //{nombre: José, apellido: García}

function getStart (req,res){
    let respuesta = {error: true, codigo:200, mensaje: "Punto de inicio"};
    res.send(respuesta);
}

function getUser(req,res){
    let respuesta;
    if(profesional != null){respuesta = profesional}
    else{respuesta = {error: true, codigo:200, mensaje: "El usuario no existe"}}

    res.send(respuesta);
}

function postUser(req,res){
    let respuesta;
    console.log(req.body);//método post tiene body, esto imprimirá por consola la infor mandada por el usuario
    if (profesional === null){
        profesional = new Professional(req.body.name,req.body.age,req.body.nationality,req.body.profession)//igualamos los parámetros de entrada del objeto
        respuesta = {error: false, codigo: 200,mensaje: "Usuario creado con éxito", resultado: profesional}
    }else{
        respuesta = {error: true, codigo: 200, mensaje: "El usuario ya existe", resultado: null}
    }

    res.send(respuesta);
}

function putUser (req,res){
    let respuesta;
    if (profesional != null){

        profesional.name = req.body.name;
        profesional.age = req.body.age;
        profesional.nationality = req.body.nationality;
        profesional.profession = req.body.profession;

        respuesta = {error: false, codigo: 200, mensaje: "Usuario actualizado", resultado: profesional};

    }else{
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe", resultado: null};
    }
    res.send(respuesta);
}

function deleteUser(req,res){
    let respuesta;
    if (profesional !=null){
        profesional = null;
        respuesta = {error: false, codigo: 200, mensaje: "Usuario borrado", resultado: profesional};
    }else{
        respuesta = {error: true, codigo:200, mensaje: "El usuario no existe", resultado: profesional};
    }
    res.send(respuesta)
}



module.exports = {getStart,getUser,postUser,putUser,deleteUser}