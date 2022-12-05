import React from 'react'
import styled from 'styled-components'
import virar from './assets/img/seta_virar.png'
import play from './assets/img/seta_play.png'
import certo from './assets/img/icone_certo.png'
import erro from './assets/img/icone_erro.png'
import quase from './assets/img/icone_quase.png'
import App from './App'


export default function Perguntas(props) {
  const [virouflashcard, setvirouflashcard] = React.useState([])
  const [abrirpergunta, setabrirpergunta] = React.useState([])
  const [virarresposta, setresposta] = React.useState([])
  const [virarred, setred] = React.useState([])
  const [viraryellow, setyellow] = React.useState([])
  const [virargreen, setgreen] = React.useState([])
  const [colorfinal, setColor] = React.useState(props.cards.map(() => "#333333"))
  const [iconfinal, setIcon] = React.useState(props.cards.map(() => play))
  const [datatesticon, setdatatest] = React.useState(props.cards.map(() => "play-btn"))
  let arraygreen = []
  let arrayred = []
  let arrayyellow = []

  return (
    <div>
      {props.cards.map((deck, i) =>
        <div data-test="flashcard">
          <Perguntafechada verificarflashcard={virouflashcard.includes(i)} color={colorfinal[i]} finalizou={props.finalizadas.includes(i)} data-test="flashcard">
            <p data-test="flashcard-text">Pergunta {i + 1}</p>
            <img src={iconfinal[i]} onClick={() => acionarFlashCard(i)} data-test={datatesticon[i]} ></img>
          </Perguntafechada>
          <Perguntaabertapergunta abrirprimeirapergunta={abrirpergunta.includes(i)} data-test="flashcard-text">
            {deck.question}
            <Perguntaabertaimagem src={virar} onClick={() => acionarResposta(i)} data-test="turn-btn" />
          </Perguntaabertapergunta>
          <Perguntaabertaresposta abrirresposta={virarresposta.includes(i)} data-test="flashcard-text">
            {deck.answer}
            <Perguntaabertacaixabotao>
              <Perguntaabertabotao background="#FF3030" onClick={() => red(i)} data-test="no-btn">Não lembrei</Perguntaabertabotao>
              <Perguntaabertabotao background="#FF922E" onClick={() => yellow(i)} data-test="partial-btn">Quase não lembrei</Perguntaabertabotao>
              <Perguntaabertabotao background="#2FBE34" onClick={() => green(i)} data-test="zap-btn">Zap!</Perguntaabertabotao>
            </Perguntaabertacaixabotao>

          </Perguntaabertaresposta>

        </div>

      )}
    </div>
  )

  function acionarFlashCard(i) {
    let arrayinicial = [...virouflashcard]
    if (!props.finalizadas.includes(i)) {
      arrayinicial.push(i)
      setvirouflashcard(arrayinicial)
      virarpergunta(i)
    }
  }

  function virarpergunta(i) {
    let arrayinicial = [...abrirpergunta]
    arrayinicial.push(i)
    setabrirpergunta(arrayinicial)
  }

  function acionarResposta(i) {
    setabrirpergunta([])
    let arrayinicial = [...virarresposta]
    arrayinicial.push(i)
    setresposta(arrayinicial)

  }

  function red(i) {
    setresposta([])
    let arrayinicial = [...virarred]
    let arraysecundario = [...props.finalizadas]
    arraysecundario.push(i)
    props.setfinalizadas(arraysecundario)
    setvirouflashcard([])
    arrayinicial.push(i)
    arrayred.push(i)
    setred(arrayinicial)
    decidircor(i)

  }


  function yellow(i) {
    setresposta([])
    let arrayinicial = [...viraryellow]
    let arraysecundario = [...props.finalizadas]
    arraysecundario.push(i)
    props.setfinalizadas(arraysecundario)
    setvirouflashcard([])
    arrayinicial.push(i)
    arrayyellow.push(i)
    setyellow(arrayinicial)
    decidircor(i)
  }


  function green(i) {
    setresposta([])
    let arrayinicial = [...virargreen]
    let arraysecundario = [...props.finalizadas]
    arraysecundario.push(i)
    props.setfinalizadas(arraysecundario)
    setvirouflashcard([])
    arrayinicial.push(i)
    arraygreen.push(i)
    setgreen(arrayinicial)
    decidircor(i)
  }

  function decidircor(i) {
    let arrayicones = [...iconfinal]
    let arraycores = [...colorfinal]
    let arraydata = [...datatesticon]

    if (arrayred.includes(i)) {
      arrayicones[i] = erro
      arraycores[i] = "#FF3030"
      arraydata[i] = "no-icon"
      setColor(arraycores)
      setIcon(arrayicones)
      setdatatest(arraydata)
    } else if (arrayyellow.includes(i)) {
      arrayicones[i] = quase
      arraycores[i] = "#FF922E"
      arraydata[i] = "partial-icon"
      setColor(arraycores)
      setIcon(arrayicones)
      setdatatest(arraydata)
    } else {
      arrayicones[i] = certo
      arraycores[i] = "#2FBE34"
      arraydata[i] = "zap-icon"
      setColor(arraycores)
      setIcon(arrayicones)
      setdatatest(arraydata)
    }
  }


}



const Perguntafechada = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${props => props.verificarflashcard ? "none" : "flex"};
  align-items: center;
  justify-content: space-between;
  position: relative;
  p{
	font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color};
  text-decoration: ${props => props.finalizou ? "line-through" : "none"};
  }
  img{
	position: absolute;
  right: 10px;
  width:20px;
  }`

const Perguntaabertapergunta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${props => props.abrirprimeirapergunta ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;`

const Perguntaabertaresposta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${props => props.abrirresposta ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;`

const Perguntaabertaimagem = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;`

const Perguntaabertacaixabotao = styled.div`
  display: flex;
  justify-content: space-between;
  `

const Perguntaabertabotao = styled.div`
   width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props => props.background};
  box-sizing: border-box;
  border-radius: 5px;
  padding:5px;`