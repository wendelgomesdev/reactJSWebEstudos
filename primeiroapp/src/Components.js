import React, { Component } from "react";

/* 

O que são Components?

  - Definição: Components são como blocos de construção de uma 
  aplicação React. Eles permitem que você divida a interface 
  do usuário em partes independentes e reutilizáveis.

  Tipos de Components:

  - Functional Components: São funções que 
  retornam elementos JSX. Eles são mais simples e 
  geralmente usados com Hooks. 

  - Class Components: São baseados em classes e 
  têm mais funcionalidades internas, como o gerenciamento 
  de estado com this.state (menos usados hoje em dia, 
  com a popularidade dos Hooks).

O que são Props?

  - Definição: "Props" é a abreviação de "properties". 
  São valores que você passa de um componente pai para 
  um componente filho.

- Características:
  * São imutáveis (não podem ser alteradas pelo componente 
  que as recebe).
  * Servem para customizar os componentes e torná-los dinâmicos.
  * São passadas como atributos na hora de usar o componente.

*/

// Class Components
class Integrante extends Component {
  render() {
    return (
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} InstagramUrl={this.props.InstagramUrl} FacebookUrl={this.props.FacebookUrl} />
        <hr></hr>
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.nome}</h2>
        <h3>cargo: {this.props.cargo}</h3>
        <SocialMedia url={this.props.InstagramUrl} socialMediaName='Facebook' />
        <SocialMedia url={this.props.FacebookUrl} socialMediaName='Instagram' />
      </div>
    );
  }
}

const SocialMedia = (props) => {
  return (
    <div>
      <a href={props.SocialMediaUrl}>{props.socialMediaName}</a>
    </div>
  );
}

// Functional Components
const Equipe = (props/* Props */) => {
  return (
    // JSX
    // Um componente sempre precisa de uma tag pai (um container)
    <div>
      <h1>Conheça nossa equipe de {props.cidade}:</h1>
      <Integrante nome='Astolfo Ribeiro' cargo='Pedreiro' InstagramUrl='http://instagram.com' FacebookUrl='facebook.com'/>
      <Integrante nome='Frederico Silva' cargo='Faxineiro' InstagramUrl='instagram.com' FacebookUrl='facebook.com' />
      <Integrante nome='Rodolfo Gonsalves' cargo='Manobrista' InstagramUrl='instagram.com' FacebookUrl='facebook.com' />
    </div>
  );
}

function EstudosComponents() {
  return (
    // JSX
    <div>
      Olá amigo!
      <Equipe cidade='São Paulo' />
    </div>
  )
}

export default EstudosComponents;