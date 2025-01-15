import React, { Component } from "react";

/* 

Em React, os componentes podem ser classificados 
como stateless ou stateful, dependendo se eles 
gerenciam ou não um estado interno. Vamos explorar 
o conceito de cada um:

    - Stateless Components (Componentes sem estado)

        - O que são?
        Componentes que não possuem estado interno. Eles recebem dados 
        via props e simplesmente os renderizam. São funcionais 
        e geralmente mais fáceis de entender e testar.

        - Uso principal:
        Exibir informações com base nas props recebidas.
        Características:
        Não utilizam o hook useState ou qualquer gerenciamento de estado.
        São funções puras: a mesma entrada (props) sempre gera a mesma 
        saída (renderização). 
    
*/

const ComponentSemState = (props) => {
    return (
        <div>
            <p> {props.text}</p>
        </div>
    );
}

/*

- Stateful Components (Componentes com estado)

    -O que são?
    Componentes que possuem estado interno e podem alterá-lo com 
    base em interações ou lógica interna. Eles geralmente utilizam 
    o hook useState (em componentes funcionais) ou o estado de 
    classe (em componentes de classe).

    - Uso principal:
    Gerenciar dados dinâmicos que podem mudar com base em eventos 
    ou lógica.

    - Características:
    Podem armazenar e manipular dados locais.
    Podem alterar o estado interno e, consequentemente, re-renderizar.

*/

class ComponentComState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contator: 0
        };

        // colocar explicação aqui sobre o bind
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contator += 1;

        this.setState(state);
    }

    diminuir(){
        if (this.state.contator === 0){
            return;
        }

        let state = this.state;
        state.contator -= 1;
        

        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>Super Contador</h1>
                <h3>
                    <p>{this.state.contator}</p>
                    <button onClick={this.diminuir}>- Diminuir</button>
                    <button onClick={this.aumentar}>+ Aumentar</button>
                </h3>
            </div>
        );
    }
}

export default ComponentComState;