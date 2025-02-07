import React, { Component } from "react";

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Visitante'
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome){
        this.setState({nome: nome});
    }

    render(){
        return(
            <div>
                <h1>Seja bem vindo(a), {this.state.nome}</h1>
                <button onClick={() => this.entrar('Wendel')}>Entrar no sistema</button>
                <button onClick={() => this.setState({nome: ''})}>Sair</button>
            </div>
        );
    }
}

export default Membro;