import Titulo from './Titulo'
import styled from 'styled-components'

function App() {
  return (
    <Screencontainer>
      <Titulo></Titulo>
      <div>Teste</div>
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
