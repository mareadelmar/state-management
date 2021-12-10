import React from "react";

class ClassState extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			name: "holis",
		};
	} // --> ?? error acá

	render() {
		return (
			<div>
				<h2>Eliminar ClassState</h2>

				{this.state.error && <p>Error: el código es incorrecto</p>}

				<p>Por favor escribe el código de seguridad</p>
				<input type='text' placeholder='Código de seguridad' />
				<button
					onClick={() =>
						this.setState({
							error: !this.state.error,
						})
					}
				>
					Comprobar
				</button>
			</div>
		);
	}
}

export { ClassState };
