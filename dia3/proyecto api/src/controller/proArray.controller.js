const { response, request } = require("express");//¿Qué hace esta línea?: Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const {Professional} = require("../classes/professional")

let proArray = [];

function getProfessional(req,res){
    let id = req.query.id;//para coger parámetros de la URL
    let respuesta;
    respuesta = {error: false, codigo:200, resultado: proArray[Number(id)]};
    res.send(respuesta);
}

function getProfessionals(req,res){//devuelve array de profesionales
    let respuesta;
    if(proArray.length != 0) {respuesta = {error: false, codigo:200, resultado: proArray}}
    else{respuesta = {error: true, codigo:200, mensaje: "No hay profesionales", resultado: proArray}}

    res.send(respuesta);
}

function postPro(req,res){//añade un profesional al array de profesionales
    let respuesta;
    let newProfessional = new Professional(req.body.name,req.body.age,req.body.nationality,req.body.profession);
    console.log(req.body);//método post tiene body, esto imprimirá por consola la infor mandada por el usuario
    
    proArray.push(newProfessional)
    respuesta = {error: false, codigo: 200,mensaje: "Profesional añadido", resultado: proArray}

    res.send(respuesta);
}

function putPro(req,res){
    let id = req.query.id;
    if (id) {
    let respuesta;
    console.log(req.body)
    proArray[id].name = req.body.name;
    proArray[id].age = req.body.age;
    proArray[id].nationality = req.body.nationality;
    proArray[id].profession = req.body.profession;

    respuesta = {error: false, codigo: 200, mensaje: "Profesional modificado", resultado: proArray}
    res.send(respuesta);
}else{
    respuesta = {error: true, codigo:200, mensaje: "Introduce un id"}
    res.send(respuesta);
}
}

function deletePro(req,res){
    let id = req.query.id;
    let respuesta;

    proArray.splice(id,1);

    respuesta = {error: false, codigo: 200,mensaje: "Profesional eliminado", resultado: proArray}
    res.send(respuesta);
}



module.exports = {getProfessional,postPro,getProfessionals,putPro,deletePro}