// initial state
export const initialValue = {
	error: false,
	loading: false,
	inputValue: "",
	confirmed: false,
	deleted: false,
};

// action types
export const actionTypes = {
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

export const reducerFunc = (state, action) => {
	// si existe en el objeto una clave con el nombre del action type
	if (reducerObjectRef(state)[action.type]) {
		return reducerObjectRef(state, action.payload)[action.type];
	} else {
		return state;
	}
};
