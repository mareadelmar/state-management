import React from "react";

class ClassState extends React.Component {
	// estados compuestos o dependientes
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			loading: false,
		};
	} // --> ?? error acá

	componentDidUpdate() {
		console.log("esto se va a ejecutar");

		if (!!this.state.loading) {
			setTimeout(() => {
				this.setState({
					loading: false,
				});
			}, 2000);
		}
	}

	render() {
		return (
			<div>
				<h2>Eliminar ClassState</h2>

				{this.state.error && <p>Error: el código es incorrecto</p>}

				{this.state.loading && <p>Cargando...</p>}

				<p>Por favor escribe el código de seguridad</p>
				<input type='text' placeholder='Código de seguridad' />
				<button
					onClick={() =>
						this.setState({
							loading: true,
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
