import React, { useState } from "react";
import "../../styles/index.css";

const Tarea = (props) => {
	const [clickEdit, setclickEdit] = useState(false);
	const [editText, seteditText] = useState("");

	const editar = () => {
		setclickEdit(true);
	};

	const manejarEdit = (event) => {
		seteditText(event.target.value);
	};

	const submitEdit = (event) => {
		event.preventDefault();
		props.editar(props.id, editText);
		seteditText("");
		setclickEdit(false);
	};

	const borrarTarea = () => {
		props.borrar(props.id);
	};
	return (
		<div>
			{!clickEdit ? (
				<div className="tarea">
					<span>{props.tarea}</span>{" "}
					<span onClick={editar}>Editar</span>{" "}
					<span onClick={borrarTarea}>Borrar</span>
				</div>
			) : (
				<form className="formEdit" onSubmit={submitEdit}>
					<input value={editText} onChange={manejarEdit} />{" "}
					<button className="buttonGuardar">Guardar</button>
				</form>
			)}
		</div>
	);
};

export default Tarea;
