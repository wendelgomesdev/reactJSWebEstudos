import React, { Component } from 'react';
import './estilo_cronometro.css';

class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contator: 0,
            botaoIniciarPausar: 'Iniciar'
        }

        this.timer = null;
        this.limparCronometro = this.limparCronometro.bind(this);
        this.iniciarCronometro = this.iniciarCronometro.bind(this);

    }

    limparCronometro(e) {
        
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;

        state.contator = 0;
        state.botaoIniciarPausar = 'Iniciar';
        this.setState(state);
    }
    
    iniciarCronometro(e) {
        let state = this.state;

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.botaoIniciarPausar = 'Iniciar';
        } else {
            this.timer = setInterval(() => {
                state.contator += 0.1;
                this.setState(state);
            }, 100);

            state.botaoIniciarPausar = 'Pausar';
        }

        this.setState(state)

    }

    render() {
        return (
            <div className='container'>
                <img className='img' src={require('./assets/cronometro.png')} />
                <a id='timer' >{this.state.contator.toFixed(1)}</a>
                <div id='areaBTN'>
                    <Botao texto={this.state.botaoIniciarPausar} acaoBTN={this.iniciarCronometro} />
                    <Botao texto='Limpar' acaoBTN={this.limparCronometro} />
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
                <button className='botao' onClick={this.props.acaoBTN}>{this.props.texto}</button>
            </div>
        )
    }
}

export default Cronometro;