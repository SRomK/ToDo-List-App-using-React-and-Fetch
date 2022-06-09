import React, { useState, useEffect } from "react";

import "../../styles/index.css";

function Tarea(label, done) {
	this.label = label;
	this.done = done;
}

const Home = () => {
	const [list, setList] = useState([]);
	const [task, setTask] = useState("");

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		if (list.length > 0) {
			newData();
		}
	}, [list]);

	const loadData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Sromk", {
			method: "GET",

			headers: {
				"Content-type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json();
			})
			.then((res) => {
				if (res !== undefined)
					setList(res.filter((task) => !task.done));
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const newData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Sromk", {
			method: "PUT",
			body: JSON.stringify(list),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json();
			})

			.catch((error) => {
				console.error(error);
			});
	};

	const HandleSubmit = (ev) => {
		ev.preventDefault();
		setList([...list, new Tarea(task, false)]);
	};
	const LimpiarForm = () => {
		document.getElementById("myInput").value = "";
	};
	const DeleteTask = (index) => {
		let tmp = list;
		list.splice(index, 1);
		console.log(tmp);
		setList([...list]);
	};

	return (
		<div className="container">
			<div>
				<form className="form" onSubmit={HandleSubmit}>
					<span>Añadir tarea</span>
					<input
						id="myInput"
						type="text"
						onChange={(ev) => setTask(ev.target.value)}
					/>
					<button
						onClick={LimpiarForm}
						type="submit"
						className="btn btn-dark">
						Añadir
					</button>
				</form>
			</div>
			<div className="lista">
				{list.map((task, i) => {
					return (
						<div className="tarea" key={i}>
							<p>{task.label}</p>
							<button
								className="btn"
								id="myBtn"
								onClick={() => {
									DeleteTask(i);
								}}>
								Borrar
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
