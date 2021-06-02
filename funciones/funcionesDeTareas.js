let fs = require('fs');  // importo libreria para leer archivos de texto

function listarTareas(tareas){
    tareas.forEach(function(elemento) {
        console.log(elemento.titulo);
    });
}

function agregarTarea(tareas,nuevaTarea){
    tareas.push(nuevaTarea);
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas,null, ' '));
}

function borrarTarea(tareas,cod){
    let tareas2 = tareas.filter(function(elemento) {
        return elemento.codigo!=cod;
    });

    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas2,null, ' '));

    return tareas2;
}

function tareasEstado(tareas,est){
    let tareas2 = tareas.filter(function(elemento) {
         return elemento.estado==est;
    });

    return tareas2;
}

module.exports = {listarTareas, agregarTarea, borrarTarea, tareasEstado};
