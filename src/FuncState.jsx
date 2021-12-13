import React, { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

const FuncState = () => {
	// estados independientes o simples
	const [state, setState] = useState({
		error: false,
		loading: false,
		inputValue: "",
		confirmed: false,
		deleted: false,
	});

	console.log(state);

	const onConfirm = () => {
		setState({
			...state,
			error: false,
			loading: false,
			confirmed: true,
		});
	};

	const onError = () => {
		setState({
			...state,
			error: true,
			loading: false,
		});
	};

	const onInputChange = newValue => {
		setState({
			...state,
			inputValue: newValue,
		});
	};

	const onSubmitCheck = () => {
		setState({
			...state,
			loading: true,
		});
	};

	const onDelete = () => {
		setState({
			...state,
			deleted: true,
		});
	};

	const onReset = () => {
		setState({
			...state,
			confirmed: false,
			deleted: false,
			inputValue: "",
		});
	};

	useEffect(() => {
		console.log("entrando al efecto");
		if (!!state.loading) {
			setTimeout(() => {
				if (state.inputValue !== SECURITY_CODE) {
					// al estado de error
					onError();
					return;
				}
				// al estado de confirmación
				onConfirm();
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
						onInputChange(e.target.value);
					}}
				/>
				<button onClick={onSubmitCheck}>Comprobar</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<>
				<p>¿estás segurx de eliminar?</p>
				<button onClick={onDelete}>Sí, eliminar</button>
				<button onClick={onReset}>No, volver</button>
			</>
		);
	} else {
		return (
			<>
				<p>Eliminado con éxito</p>
				<button onClick={onReset}>Me arrepentí</button>
			</>
		);
	}
};

export { FuncState };
