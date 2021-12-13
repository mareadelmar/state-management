import React, { useEffect, useReducer } from "react";

const SECURITY_CODE = "paradigma";

const intialValue = {
	error: false,
	loading: false,
	inputValue: "",
	confirmed: false,
	deleted: false,
};

// action types
const actionTypes = {
	error: "ERROR",
	inputValue: "INPUT_VALUE",
	confirm: "CONFIRM",
	check: "CHECK",
	delete: "DELETE",
	reset: "RESET",
};

// divide el reducer en dos, por un lado el objeto de referencia de los types
// y por el otro el condicional, la función reducer propiamente dicha.

const reducerObjectRef = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		loading: false,
		error: true,
	},
	[actionTypes.inputValue]: {
		...state,
		inputValue: payload,
	},
	[actionTypes.confirm]: {
		...state,
		error: false,
		loading: false,
		confirmed: true,
	},
	[actionTypes.check]: {
		...state,
		loading: true,
	},
	[actionTypes.delete]: {
		...state,
		deleted: true,
	},
	[actionTypes.reset]: {
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
		return reducerObjectRef(state, action.payload)[action.type];
	} else {
		return state;
	}
};

const ReducerState = () => {
	// estados independientes o simples
	const [state, dispatch] = useReducer(reducerFunc, intialValue);

	console.log(state);
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
					dispatch({ type: actionTypes.error });
					console.log("holi");
					return;
				}
				// al estado de confirmación
				//onConfirm();
				dispatch({ type: actionTypes.confirm });
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
					onChange={e =>
						dispatch({
							type: actionTypes.inputValue,
							payload: e.target.value,
						})
					}
				/>
				<button onClick={() => dispatch({ type: actionTypes.check })}>
					Comprobar
				</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<>
				<p>¿estás segurx de eliminar?</p>
				<button onClick={() => dispatch({ type: actionTypes.delete })}>
					Sí, eliminar
				</button>
				<button onClick={() => dispatch({ type: actionTypes.reset })}>
					No, volver
				</button>
			</>
		);
	} else {
		return (
			<>
				<p>Eliminado con éxito</p>
				<button onClick={() => dispatch({ type: actionTypes.reset })}>
					Me arrepentí
				</button>
			</>
		);
	}
};

export { ReducerState };
