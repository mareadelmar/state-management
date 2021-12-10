import React, { useState } from "react";

const UseState = () => {
	const [error, setError] = useState(false);
	return (
		<div>
			<h2>Eliminar UseState</h2>

			{error && <p>Error: el código es incorrecto</p>}

			<p>Por favor escribe el código de seguridad</p>
			<input type='text' placeholder='Código de seguridad' />
			<button onClick={() => setError(prev => !prev)}>Comprobar</button>
		</div>
	);
};

export { UseState };
