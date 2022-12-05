import Titulo from './Titulo'
import styled from 'styled-components'
import Perguntas from './Perguntas';
import Resultado from './Resultado';

function App() {
  return (
    <Screencontainer>
      <Titulo></Titulo>
      <Perguntas></Perguntas>
      <Resultado></Resultado>
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
