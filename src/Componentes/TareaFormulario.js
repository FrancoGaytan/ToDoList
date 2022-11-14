import React, {useState} from "react";
import '../Estilos/TareaFormulario.css';


function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id: Math.round(Math.random()*100000),
            texto: input, 
            completada: false
        }
        props.onSubmit(tareaNueva);//esta funcion nos va a pasar la nueva tarea y va a permitir agregarlo a la lista de tareas
    }
    return(
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    )
}

export default TareaFormulario;