import React from "react";

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

// Functional Components
const Bemvindo = (props/* Props */) => {
  return (
    <div>
      <h2>Bem vindo(a), {props.nome}</h2>
      <h3>Sua idade é: {props.idade} Anos</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá amigo!
      <Bemvindo nome='Wendel' idade='28' />
      <h1>Tudo nos conformes meu chapa?</h1>
    </div>
  )
}

export default App;