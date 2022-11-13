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


function getProfessionals() {
let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    method: "GET",
};
   //acuérdate de cambiar en routers
  let id = document.getElementById("proID").value;
if(id){
  
  let url = "http://localhost:3000/profesional?id=" +id;
  fetch(url, param)
    .then((data) => {
    return data.json();
    })
    .then(function (data) {
    console.log(data);
    if (data.error == false)
    {
        let shownData = document.getElementById('resultados')
        
        shownData.innerHTML = `<h6>Profesional:</h6>
        <p>${data.resultado.name}</p> 
        <p>${data.resultado.age}</p>
        <p>${data.resultado.nationality}</p>
        <p>${data.resultado.profession}</p>
        <br>`       
        // no hace falta poner data.resultado[id].name, porque trabajamos con un objeto, no con un array
    }
    else{alert("Error" + data.mensaje)}
        // showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function (error) {
    console.log(error);
    });



}else{

let url = "http://localhost:3000/profesionales"
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

}//fin de función

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
  let url = "http://localhost:3000/profesionales"; 

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

//en esta función y en Delete, lanza un mensaje de error "mensage: cannot set the properties of undefined"
function putProfessional() {
let newName = document.getElementById("name").value;
let newAge = document.getElementById("age").value;
let newNationality = document.getElementById("nationality").value;
let newProfession = document.getElementById("profession").value;
let id = document.getElementById("proID").value;

let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "PUT",
    body: JSON.stringify({name: newName,age: newAge,nationality: newNationality,profession: newProfession})//hay que poner para put?
};

let url = "http://localhost:3000/profesionales?id="+ id

  if (id != "") {
    fetch(url, param)
    .then((data) => {
    return data.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })

  } else {
    alert("Rellena el campo ID");
  }
}

function deleteProfessional() {
  let id = document.getElementById("proID").value;

  let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "DELETE",

  };

  let url = "http://localhost:3000/profesionales?id="+id

    if (id) {
      // professionals.splice(id,1);//borramos con splice el elemento igual al id.

  fetch(url,param)
  .then((data) =>{
    return data.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
    } else {
      alert("Rellena el campo ID");
    }
}

module.exports = {
  getProfessionals,
  postProfessional,
  putProfessional,
  deleteProfessional,
};
