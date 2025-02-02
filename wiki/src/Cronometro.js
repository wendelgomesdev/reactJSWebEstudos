import React, { Component } from 'react';
import './estilo_cronometro.css';

class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFrase: ''
        }

    }

    quebraBiscoito(e) {

    }

    render() {
        return (
            <div className='container'>
                <img className='img' src={require('./assets/biscoito.png')} />
                <a>Timer</a>
                <div className='areaBTN'>
                    <Botao texto='Iniciar' acaoBTN={this.quebraBiscoito} />
                    <Botao texto='Limpar'
                </div>
                <h3 className='textoFrase'>{this.state.currentFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBTN}>Abrir biscoito</button>
            </div>
        )
    }
}

export default BiscoitoDaSorte;