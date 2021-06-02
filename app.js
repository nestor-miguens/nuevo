let {listarTareas, agregarTarea, borrarTarea, tareasEstado} = require('./funciones/funcionesDeTareas');  

let arreglo_objs_literal = require('./servicios/tareas.json');

let nuevaTarea =    
{
    "codigo": 16,
    "titulo": "Comprobar sintaxis",
    "estado": "Pendiente" 
};

//agregarTarea(arreglo_objs_literal,nuevaTarea);

//arreglo_objs_literal = borrarTarea(arreglo_objs_literal,15);

listarTareas(arreglo_objs_literal);

//let d= tareasEstado(arreglo_objs_literal,"Pendiente");
//console.log(d);



