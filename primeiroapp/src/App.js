import React from "react";

const Bemvindo = (props) => {
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