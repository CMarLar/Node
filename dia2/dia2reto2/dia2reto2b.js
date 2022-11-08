const fs = require('fs/promises');

let obj = {name: "Carlos",surname: "Marina",age: 36};

async function writeAndRead (){//declaramos nueva función
    try{
        await fs.writeFile('objeto.json', JSON.stringify(obj))//await delante de cada función asíncrona. La ejecución se para hasta que esta termina. No pongas punto y coma
        let data = await fs.readFile('objeto.json','utf-8')//la variable se crea para luego pasarla por la consola
        console.log(JSON.parse(data));
    }catch(err){
        console.log(err);
    }
}

writeAndRead()
