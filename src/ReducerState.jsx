import React, { useEffect, useReducer } from "react";
import { initialValue, actionTypes, reducerFunc } from "./reducer/stateReducer";

const SECURITY_CODE = "paradigma";

const ReducerState = () => {
	const [state, dispatch] = useReducer(reducerFunc, initialValue);
	console.log(state);

	// action creators:
	const onConfirm = () => dispatch({ type: actionTypes.confirm });
	const onError = () => dispatch({ type: actionTypes.error });
	const onSubmitCheck = () => dispatch({ type: actionTypes.check });
	const onDelete = () => dispatch({ type: actionTypes.delete });
	const onReset = () => dispatch({ type: actionTypes.reset });

	const onInputChange = e =>
		dispatch({
			type: actionTypes.inputValue,
			payload: e.target.value,
		});

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
				<h2>Eliminar Reducer</h2>

				{state.error && !state.loading && (
					<p>Error: el código es incorrecto</p>
				)}
				{state.loading && <p>Cargando...</p>}

				<p>Por favor escribe el código de seguridad</p>
				<input
					type='text'
					placeholder='Código de seguridad'
					value={state.inputValue}
					onChange={onInputChange}
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

export { ReducerState };
