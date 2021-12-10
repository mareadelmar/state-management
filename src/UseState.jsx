import React, { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

const UseState = () => {
	// estados independientes o simples
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		console.log("entrando al efecto");
		if (!!loading) {
			setTimeout(() => {
				setLoading(false);
				if (inputValue !== SECURITY_CODE) {
					console.log(inputValue !== SECURITY_CODE);
					setError(true);
					return;
				}
				setError(false);
			}, 2000);
		}

		return () => {
			//setError(false);
			console.log("saliendo del efecto");
		};
	}, [loading]);

	return (
		<div>
			<h2>Eliminar UseState</h2>

			{!loading && error && <p>Error: el código es incorrecto</p>}
			{loading && <p>Cargando...</p>}

			<p>Por favor escribe el código de seguridad</p>
			<input
				type='text'
				placeholder='Código de seguridad'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button onClick={() => setLoading(true)}>Comprobar</button>
		</div>
	);
};

export { UseState };
