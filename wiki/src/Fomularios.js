import React, { Component } from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
    }

    trocaEmail(e) {
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSenha(e) {
        let valorDigitado = e.target.value;
        this.setState({senha: valorDigitado});
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                Email:
                <input type='email' name='email' value={this.state.email} onChange={this.trocaEmail} />
                Senha:
                <input type="password" name='senha' value={this.state.senha} onChange={this.trocaSenha} />
                <p>Email: {this.state.email}</p>
                <p>Senha: {this.state.senha}</p>
            </div>
        );
    }
}

export default Formulario;