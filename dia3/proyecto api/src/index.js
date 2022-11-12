// const {Professional} = require("./src/classes/professional.js")
// import { Professional } from "./src/classes/professional";

//pongo aquí la clase professional porque me da problemas en otro archivos
class Professional {
  constructor(name, age, nationality, profession) {
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

let pro1 = new Professional("Pepito", 12, "Spanish", "Actor");
let pro2 = new Professional("Manolete", 43, "Venezolano", "Writer");

let professionals = [pro1, pro2];

function getProfessionals() {
let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    method: "GET",
};
  let url = "http://localhost:3000/profesionales"; //acuérdate de cambiar en routers


fetch(url, param)
    .then((data) => {
    return data.json();
    })
    .then(function (data) {
    console.log(data);
    if (data.error == false)
    {
        let shownData = document.getElementById('resultados')
        for (let i = 0; i < data.resultado.length; i++) {
        shownData.innerHTML += `<h6>Profesional ${i+1}:</h6>
        <p>${data.resultado[i].name}</p> 
        <p>${data.resultado[i].age}</p>
        <p>${data.resultado[i].nationality}</p>
        <p>${data.resultado[i].profession}</p>
        <br>`       
        }
    }
    else{alert("Error" + data.mensaje)}
        // showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function (error) {
    console.log(error);
    });
}

function postProfessional() {
let newName = document.getElementById("name").value;
let newAge = document.getElementById("age").value;
let newNationality = document.getElementById("nationality").value;
let newProfession = document.getElementById("profession").value;

let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "POST",
    body: JSON.stringify({name: newName,age: newAge,nationality: newNationality,profession: newProfession})//MUY IMPORTANTE
    //introducimos este nuevo parámetro body para meter datos (https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
};
  let url = "http://localhost:3000/profesionales"; //acuérdate de cambiar en routers

if (newName == "" ||
    newAge == "" ||
    newNationality == "" ||
    newProfession == "") {
    alert("Por favor, rellena todos los campos");
} else {
    fetch(url, param)
    .then((data) => {
    return data.json();
    })
    .then(function (data) {
    console.log(data);
    let shownData = document.getElementById('resultados')
    shownData.innerHTML=`<h6>Profesional creado:</h6>
    <p>${data.resultado[data.resultado.length-1].name}</p> 
    <p>${data.resultado[data.resultado.length-1].age}</p>
    <p>${data.resultado[data.resultado.length-1].nationality}</p>
    <p>${data.resultado[data.resultado.length-1].profession}</p>
    <br>`
    })
    .catch(function (error) {
    console.log(error);
    });
}

}

function putProfessional() {
let newName = document.getElementById("name").value;
let newAge = document.getElementById("age").value;
let newNationality = document.getElementById("nationality").value;
let newProfession = document.getElementById("profession").value;
let id = document.getElementById("proID").value;

let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "PUT",
    body: JSON.stringify({name: newName,age: newAge,nationality: newNationality,profession: newProfession})
};

let url = "http://localhost:3000/profesionales"

  if (id != "") {

    professionals[id].name = newName;
    professionals[id].age = newAge;
    professionals[id].nationality = newNationality;
    professionals[id].profession = newProfession;
    fetch(url, param)
    .then((data) => {
    return data.json();
    })
    .then((data) => {
        console.log(data);
    })

  } else {
    console.log("Rellena el campo ID");
  }
}

function deleteProfessional() {
  let id = document.getElementById("proID").value;

  if (id != "") {
    professionals[id].name = null;
    professionals[id].age = null;
    professionals[id].nationality = null;
    professionals[id].profession = null;
    console.log("Profesional borrado");
  } else {
    console.log("Rellena el campo ID");
  }
}

module.exports = {
  getProfessionals,
  postProfessional,
  putProfessional,
  deleteProfessional,
};
