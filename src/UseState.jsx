import React, { useState, useEffect } from "react";

const UseState = () => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log("esto se va a ejecutar");

		if (!!loading) {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	}, [loading]);

	return (
		<div>
			<h2>Eliminar UseState</h2>

			{error && <p>Error: el código es incorrecto</p>}
			{loading && <p>Cargando...</p>}

			<p>Por favor escribe el código de seguridad</p>
			<input type='text' placeholder='Código de seguridad' />
			<button onClick={() => setLoading(true)}>Comprobar</button>
		</div>
	);
};

export { UseState };
