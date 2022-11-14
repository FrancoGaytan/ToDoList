import React, {useState} from "react";
import "../Estilos/ListaDeTareas.css";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){//pruebo que la tarea no esta vacía
            tarea.texto = tarea.texto.trim();//quita los espacios del principio o el final de una cadena
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);//la tarea con el id que sea igual no la vamos a incluir
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea=>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
            tareas.map((tarea)=>
                <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}
                />
            )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
