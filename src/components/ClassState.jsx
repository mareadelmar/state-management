import React from "react";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
	// estados compuestos o dependientes
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			loading: false,
			inputValue: "",
		};
	} // --> ?? error acá

	componentDidUpdate() {
		console.log("esto se va a ejecutar");

		if (!!this.state.loading) {
			setTimeout(() => {
				if (this.state.inputValue !== SECURITY_CODE) {
					this.setState({ error: true, loading: false });
					return;
				}
				this.setState({ error: false, loading: false });
			}, 2000);
		}
	}

	render() {
		return (
			<div>
				<h2>Eliminar ClassState</h2>

				{this.state.error && !this.state.loading && (
					<p>Error: el código es incorrecto</p>
				)}

				{this.state.loading && <p>Cargando...</p>}

				<p>Por favor escribe el código de seguridad</p>
				<input
					type='text'
					placeholder='Código de seguridad'
					value={this.state.inputValue}
					onChange={e =>
						this.setState({
							inputValue: e.target.value,
						})
					}
				/>
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
