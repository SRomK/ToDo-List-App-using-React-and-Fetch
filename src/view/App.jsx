import React, { useState } from "react";
import "../styles/index.css";
import TareaForm from "../js/component/TareaForm.jsx";
import Tarea from "../js/component/Tarea.jsx";
//include images into your bundle

//create your first component
const App = () => {
	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
		//operador SPRED sirve para hacer una copia del array, en este caso de listaTareas y le decimos que añada la nueva lista que le hemos pasado
	};

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	const actualizarTarea = (id, tarea) => {
		const listaActualizada = listaTareas.map((e, index) => {
			if (index === id) {
				e = tarea;
			}

			return e;
		});

		setListaTareas(listaActualizada);
	};

	//console.log(listaTareas);
	return (
		<>
			<div className="App">
				<TareaForm nuevaTarea={nuevaTarea} />

				<div className="list">
					{listaTareas.map((e, index) => (
						<Tarea
							tarea={e}
							borrar={borrar}
							id={index}
							editar={actualizarTarea}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default App;
