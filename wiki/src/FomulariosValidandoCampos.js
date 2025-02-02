import React, { Component } from "react";

class FomulariosValidandoCampos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };

        this.cadastrar = this.cadastrar.bind(this)

    }

    cadastrar(e) {
        const { nome, email, senha } = this.state;
        if (nome !== '' && email !== '' && senha !== '') {
            console.log(`
                Nome: ${nome}\n
                Email: ${email}\n
                Senha: ${senha}
                `)
                this.setState({ error: '' })
        } else {
            this.setState({ error: 'Por favor, preencha todos os campo!' })
        }

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Novo usuário</h1>
                {(this.state.error !== '') ? <p>{this.state.error}</p> : <p> </p>}
                <form onSubmit={this.cadastrar}>
                    <label htmlFor='nome'>Nome:</label>
                    <br />
                    <input id='nome' name='nome' type='text' value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })} />
                    <br />
                    <label htmlFor='email'>Email:</label>
                    <br />
                    <input id='email' name='email' type='email' value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                    <br />
                    <label htmlFor='senha'>Senha:</label>
                    <br />
                    <input id='senha' name='senha' type='password' value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })} />
                    <br />
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default FomulariosValidandoCampos;