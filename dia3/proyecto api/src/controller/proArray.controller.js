const { response, request } = require("express");
const {Professional} = require("../classes/professional")

let proArray = [];

function getProfessional (req,res){
    let id = req.query.id;
    let respuesta;
    respuesta = {error: true, codigo:200, resultado: proArray[id]};
    res.send(respuesta);
}

function getPros(req,res){//devuelve array de profesionales
    let respuesta;
    if(proArray.length != null){respuesta = proArray}
    else{respuesta = {error: true, codigo:200, mensaje: "No hay profesionales"}}

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

function putPro (req,res){
    let id = req.query.id;
    let respuesta;
    proArray[id].name = req.body.name;
    proArray[id].age = req.body.age;
    proArray[id].nationality = req.body.nationality;
    proArray[id].profession = req.body.profession;

    respuesta = {error: false, codigo: 200, mensaje: "Profesional modificado", resultado: proArray}
    res.send(respuesta);
}

function deletePro(req,res){
    let id = req.query.id;
    let respuesta;

    proArray[id].name = null;
    proArray[id].age = null;
    proArray[id].nationality = null;
    proArray[id].profession = null;

    respuesta = {error: false, codigo: 200,mensaje: "Profesional eliminado", resultado: proArray}
    res.send(respuesta);
}



module.exports = {getProfessional,postPro,getPros,putPro,deletePro}