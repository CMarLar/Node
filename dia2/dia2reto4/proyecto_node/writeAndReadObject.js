const fs = require('fs/promises');



function writeAndReadThenCatch (path, obj){
    
    fs.writeFile(path, JSON.stringify(obj))

    .then(() => {
        return fs.readFile(path,"utf8")
    })
    .then((data) => {
        console.log(JSON.parse(data));
    })
    .catch((err) =>{
        console.log(err);
    })

}

// writeAndReadThenCatch("calle.json",{calle: "Teruel",número: 8})

async function writeAndReadAsyncAwait (path,obj){
    try{
        await fs.writeFile(path,JSON.stringify(obj))
        let data = await fs.readFile(path,"utf-8")
        console.log(JSON.parse(data));
    }catch(err){
        console.log(err);
    }
}

// writeAndReadAsyncAwait("objeto.json", {calle: "Teruel",número: 8})

module.exports = {writeAndReadThenCatch, writeAndReadAsyncAwait};
