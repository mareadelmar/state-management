import React, { useEffect, useReducer } from "react";

const SECURITY_CODE = "paradigma";

const intialValue = {
	error: false,
	loading: false,
	inputValue: "paradigma",
	confirmed: false,
	deleted: false,
};

// divide el reducer en dos, por un lado el objeto de referencia de los types
// y por el otro el condicional, la función reducer propiamente dicha.

const reducerObjectRef = (state, action) => ({
	ERROR: {
		...state,
		loading: false,
		error: true,
	},
	INPUT_VALUE: {
		...state,
		inputValue: action.payload,
	},
	CONFIRM: {
		...state,
		error: false,
		loading: false,
		confirmed: true,
	},
	CHECK: {
		...state,
		loading: true,
	},
	DELETE: {
		...state,
		deleted: true,
	},
	RESET: {
		...state,
		loading: false,
		confirmed: false,
		deleted: false,
		inputValue: "",
	},
});

const reducerFunc = (state, action) => {
	// si existe en el objeto una clave con el nombre del action type
	if (reducerObjectRef(state)[action.type]) {
		return reducerObjectRef(state)[action.type];
	} else {
		return state;
	}
};

const ReducerState = () => {
	// estados independientes o simples
	const [state, dispatch] = useReducer(reducerFunc, intialValue);

	console.log(state);
	console.log(state.loading);
	// const onInputChange = newValue => {
	// 	setState({
	// 		...state,
	// 		inputValue: newValue,
	// 	});
	// };

	useEffect(() => {
		console.log("entrando al efecto");

		if (!!state.loading) {
			setTimeout(() => {
				if (state.inputValue !== SECURITY_CODE) {
					// al estado de error
					//onError();
					dispatch({ type: "ERROR" });
					console.log("holi");
					return;
				}
				// al estado de confirmación
				//onConfirm();
				dispatch({ type: "CONFIRM" });
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
					onChange={e =>
						dispatch({
							type: "INPUT_VALUE",
							payload: e.target.value,
						})
					}
				/>
				<button onClick={() => dispatch({ type: "CHECK" })}>
					Comprobar
				</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<>
				<p>¿estás segurx de eliminar?</p>
				<button onClick={() => dispatch({ type: "DELETE" })}>
					Sí, eliminar
				</button>
				<button onClick={() => dispatch({ type: "RESET" })}>
					No, volver
				</button>
			</>
		);
	} else {
		return (
			<>
				<p>Eliminado con éxito</p>
				<button onClick={() => dispatch({ type: "RESET" })}>
					Me arrepentí
				</button>
			</>
		);
	}
};

export { ReducerState };
