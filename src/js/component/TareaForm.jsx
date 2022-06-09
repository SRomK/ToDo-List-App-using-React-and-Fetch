import React, { useState } from "react";
import "../../styles/index.css";

const TareaForm = (props) => {
	const [inputText, setInputText] = useState("");
	const [validation, setValidation] = useState(true);

	const HandleForm = (event) => {
		setInputText(event.target.value);
		//console.log(inputText);
	};

	const Submit = (event) => {
		event.preventDefault();
		if (inputText.trim() !== "") {
			props.nuevaTarea(inputText);
			setInputText("");
			setValidation(true);
		} else {
			setValidation(false);
		}
	};
	return (
		<>
			<div>
				<form className="form" onSubmit={Submit}>
					<span>Añadir tarea</span>
					<input value={inputText} onChange={HandleForm} />
					<button>Añadir</button>
				</form>
				{!validation && (
					<div className="validation">Debe añadir una tarea</div>
				)}
			</div>
		</>
	);
};

export default TareaForm;

//las tasks se agregan cuando el usuario apreta enter
//delete icon shows when task is hover
//user can add how many tasks as he wants
//When there is no tasks the list should say "No tasks, add a task"
//There is no way to update a task, the user will have to delete and create again.
