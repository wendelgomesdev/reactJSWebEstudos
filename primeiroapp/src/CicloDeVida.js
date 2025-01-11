import React, { Component } from "react";

/*

No React, o ciclo de vida de um componente refere-se 
às fases pelas quais o componente passa, desde sua criação 
até sua remoção da interface. Isso inclui etapas como 
inicialização, atualização e desmontagem.

# Principais fases do ciclo de vida de um componente:

    1 - Montagem (Mounting):

    É quando o componente é criado e inserido no DOM.
    Métodos principais:

    - constructor(): Configura o estado inicial e outras 
    variáveis. Não é obrigatório.

    - render(): Retorna o JSX que será exibido na tela.
    
    - componentDidMount(): Chamado logo após o componente ser 
    inserido no DOM. É útil para fazer requisições de API ou 
    configurar listeners.

    -------------------------------------

    2 - Atualização (Updating):
    Ocorre quando o componente é atualizado, seja por uma mudança 
    no estado (state) ou nas propriedades (props).

    Métodos principais:

    - shouldComponentUpdate(nextProps, nextState): Decide se 
    o componente deve ou não ser re-renderizado. Retorna um 
    booleano. (Pouco usado no dia a dia.)

    - render(): É chamado novamente para re-renderizar 
    o componente com as novas informações.

    - componentDidUpdate(prevProps, prevState): Executado após 
    o componente ser atualizado. Pode ser usado para reagir 
    a mudanças específicas.

    -------------------------------------

    3 - Desmontagem (Unmounting):

    É quando o componente é removido do DOM.

    Método principal:

    - componentWillUnmount(): Usado para limpar recursos, 
    como listeners ou timers, e evitar vazamentos de memória.

*/

class CicloDeVida extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            hora: 'Carregando hora...',
            segundos: 0
        };
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        /*

        (prevProps, prevState) é um padrão comum em métodos 
        de ciclo de vida do React, como componentDidUpdate, 
        e serve para acessar os valores anteriores das 
        propriedades (props) e do estado (state) do componente 
        antes da atualização atual.

        componentDidUpdate(prevProps, prevState)
        Esse método é executado após o componente ser atualizado 
        no DOM. Os parâmetros prevProps e prevState fornecem os 
        valores anteriores das props e do state, permitindo 
        compará-los com os valores atuais.

        */

        // Atualiza os segundos apenas se a hora mudou
        if (prevState.hora !== this.state.hora) {
          this.setState((state) => ({ segundos: state.segundos + 1 }));
        }
      }

      shouldComponentUpdate(){
        // Condição para determinar se o componente deve 
        // ser atualizado
        return true; // Re-renderiza o componente
        // return false; // Impede a re-renderização
      }

    render(){
        return(
            <div>
                <h1>Hora certa: {this.state.hora}</h1>
                <p>Segundos passados: {this.state.segundos}</p>
            </div>
        );
    }

}

export default CicloDeVida;