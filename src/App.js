import Titulo from './Titulo'
import styled from 'styled-components'
import Perguntas from './Perguntas';
import Resultado from './Resultado';
import React from 'react';

function App() {
  const [finalizadas,setfinalizadas] = React.useState("")
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  return (
    <Screencontainer>
      <Titulo></Titulo>
      <Perguntas finalizadas={finalizadas} setfinalizadas={setfinalizadas} cards={cards}></Perguntas>
      <Resultado finalizadas={finalizadas} cards={cards}></Resultado>
    </Screencontainer>

  );
}

const Screencontainer = styled.div`
 background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;`

export default App;
