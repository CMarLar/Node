// const {Professional} = require("./src/classes/professional.js")
// import { Professional } from "./src/classes/professional";

//pongo aquí la clase professional porque me da problemas en otro archivos
class Professional {

    constructor(name, age, nationality,  profession,){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.profession = profession;
    }
    information() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.nationality);
        console.log(this.profession);
    }
}

let pro1 = new Professional("Pepito",12,"Spanish","Actor");
let pro2 = new Professional("Manolete",43,"Venezolano","Writer")

let professionals = [pro1,pro2]

function getProfessionals(){

    let param = {headers: {"Content-type": "application/json; charset= UTF-8"}, method: "GET"}
    let url = "http://localhost:3000/prueba";//acuérdate de cambiar en routers

    let newName = document.getElementById("name").value;
    let newAge = document.getElementById("age").value;
    let newNationality= document.getElementById("nationality").value;
    let newProfession= document.getElementById("profession").value;
    let id = document.getElementById("proID").value;

    if(newName == "" && newAge == "" && newNationality == "" && newProfession == "" && id ==""){
        console.log(professionals);
    }else if (id != ""){
        console.log(professionals[id]);
    }

    fetch(url, param)
    .then ((data) =>{
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {
            document.getElementById("mostrarNombre").value = result.nombre;
            document.getElementById("mostrarApellidos").value = result.apellidos;
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })



}

function postProfessional(){
    let newName = document.getElementById("name").value;
    let newAge = document.getElementById("age").value;
    let newNationality= document.getElementById("nationality").value;
    let newProfession= document.getElementById("profession").value;

    let url = "http://localhost:3000/prueba";//acuérdate de cambiar en routers

    if(newName == "" || newAge == "" || newNationality == "" || newProfession == ""){
        console.log("Error: Algunos campos están vacíos");
    }else{
        let newProfessional = new Professional(newName,newAge,newNationality,newProfession);
        professionals.push(newProfessional);
        console.log("Profesional creado: " + newProfessional)
    }
}


function putProfessional(){
    let id = document.getElementById("proID").value;

    if(id != ""){
    professionals[id].name = document.getElementById("name").value;
    professionals[id].age = document.getElementById("age").value;
    professionals[id].nationality = document.getElementById("nationality").value;
    professionals[id].profession = document.getElementById("profession").value;
    console.log("Profesional modificado");

    }else{
        console.log("Rellena el campo ID");
    }
}

function deleteProfessional(){
    let id = document.getElementById("proID").value;

    if(id != ""){
    professionals[id].name = null
    professionals[id].age = null
    professionals[id].nationality = null;
    professionals[id].profession = null;
    console.log("Profesional borrado");

    }else{
        console.log("Rellena el campo ID");
    }
}


module.exports = {getProfessionals,postProfessional,putProfessional,deleteProfessional}