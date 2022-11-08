/*Estas dos funciones deben ser independientes, esto es que si se desea escribir y leer los datos de un
objeto en un fichero se pueda hacer independiente de si este objeto se ha creado a mano o con el
módulo readConsole.

• Además la importanción de los módulos creados se debe hacer solo en el fichero index.js. De tal forma
que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior.*/


const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");

readConsole(function (obj){
    writeAndRead("objeto.json",obj)
});
