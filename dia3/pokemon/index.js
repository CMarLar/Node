let urlBase = 'https://pokeapi.co/api/v2/pokemon/';


function searchPokemon(){
    let nombre = document.getElementById('pokemon-name').value
    // console.log(nombre);


    document.getElementById('name').innerHTML= nombre
    let appendedURL = urlBase + nombre
    // console.log(appendedURL);

    fetch(appendedURL)

    .then(data => data.json()) // haciendo la función de la siguiente manera devuelve UNDEFINED
    
    /*
    .then(response => {
        response.json()
    })
    */
    
    .then(data => {
        console.log(data.name)
        console.log(data.abilities);
    
        let nameField = document.getElementById('name')
        nameField.innerHTML = 
`      
<p class="text-center" style="font-weight:500;">Nombre del pokemon:</p>
<p class="text-center" id="name">${data.name[0].toUpperCase()}${data.name.slice(1)} </p>

<p class="text-center" style="font-weight:500;">Número del pokemon:</p>
<p class="text-center" id="pokeNum">${data.order} </p>
`

        // let pokeNumField = document.getElementById('pokeNum')
        // pokeNumField.innerHTML = `${data.order}`

        let abilitiesField = document.getElementById('abilities')
        abilitiesField.innerHTML = ` 
        <table class="table" style="text-align:center;">
    <thead>
      <tr>
        <th scope="col">Habilidades</th>
      </tr>
    </thead>
    <tbody>
        `
        for (let i = 0; i < data.abilities.length; i++) {

            abilitiesField.innerHTML += `
            <tr>
            <td>${data.abilities[i].ability.name}</td>
            </tr>`
        }

        abilitiesField.innerHTML += `</tbody>
        </table>`


        let imageField = document.getElementById('image')
        imageField.innerHTML = `<img src="${data.sprites.front_default}" width="200px"/> `
    
    })
    
    .catch(error =>{
        console.log(error);
    })



}




