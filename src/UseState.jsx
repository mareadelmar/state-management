import React, { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

const UseState = () => {
	// estados independientes o simples
	const [state, setState] = useState({
		error: false,
		loading: false,
		inputValue: "",
		confirmed: false,
		deleted: false,
	});

	console.log(state);

	useEffect(() => {
		console.log("entrando al efecto");
		if (!!state.loading) {
			setTimeout(() => {
				if (state.inputValue !== SECURITY_CODE) {
					setState({
						...state,
						error: true,
						loading: false,
					});
					return;
				}
				setState({
					...state,
					error: false,
					loading: false,
					confirmed: true,
				});
			}, 2000);
		}
	}, [state.loading]);

	if (!state.confirmed && !state.deleted) {
		return (
			<div>
				<h2>Eliminar UseState</h2>

				{state.error && !state.loading && (
					<p>Error: el código es incorrecto</p>
				)}
				{state.loading && <p>Cargando...</p>}

				<p>Por favor escribe el código de seguridad</p>
				<input
					type='text'
					placeholder='Código de seguridad'
					value={state.inputValue}
					onChange={e => {
						setState({
							...state,
							inputValue: e.target.value,
						});
					}}
				/>
				<button
					onClick={() => {
						setState({
							...state,
							loading: true,
						});
					}}
				>
					Comprobar
				</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<>
				<p>¿estás segurx de eliminar?</p>
				<button
					onClick={() => {
						setState({
							...state,
							deleted: true,
						});
					}}
				>
					Sí, eliminar
				</button>
				<button
					onClick={() => {
						setState({
							...state,
							confirmed: false,
							inputValue: "",
						});
					}}
				>
					No, volver
				</button>
			</>
		);
	} else {
		return (
			<>
				<p>Eliminado con éxito</p>
				<button
					onClick={() => {
						setState({
							...state,
							confirmed: false,
							deleted: false,
							inputValue: "",
						});
					}}
				>
					Me arrepentí
				</button>
			</>
		);
	}
};

export { UseState };
