import React from 'react'
import styled from 'styled-components'
import virar from './assets/img/seta_virar.png'
import play from './assets/img/seta_play.png'

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

export default function Perguntas() {
	const [normal, setnormal] = React.useState(cards.question)
	const [contador,setcontador] = React.useState(1)
  const [flashcard,setflashcard]= React.useState(false)
  const [virouflashcard,setvirouflashcard] = React.useState([])
  const [abrirpergunta,setabrirpergunta] = React.useState([])
  const [virarresposta,setresposta] = React.useState([])
  const [virarred,setred] = React.useState([])
  const [viraryellow,setyellow] = React.useState([])
  const [virargreen,setgreen] = React.useState([])

	return (
		<div>
			{cards.map((deck,i) =>
				<div>
					<Perguntafechada verificarflashcard={virouflashcard.includes(i)}>
						<p>Pergunta {i+1}</p>
						<img src={play} onClick={()=>acionarFlashCard(i)}></img>
					</Perguntafechada>
					<Perguntaabertapergunta abrirprimeirapergunta={abrirpergunta.includes(i)}>
						{deck.question}
						<Perguntaabertaimagem src={virar} onClick={()=>acionarResposta(i)}/>
					</Perguntaabertapergunta>
					<Perguntaabertaresposta abrirresposta={virarresposta.includes(i)}>
						{deck.answer}
						<Perguntaabertacaixabotao>
							<Perguntaabertabotao background="#FF3030" onClick={()=>red(i)}>Não lembrei</Perguntaabertabotao>
							<Perguntaabertabotao background="#FF922E" onClick={()=>yellow(i)}>Quase não lembrei</Perguntaabertabotao>
							<Perguntaabertabotao background="#2FBE34" onClick={()=>green(i)}>Zap!</Perguntaabertabotao>
						</Perguntaabertacaixabotao>

					</Perguntaabertaresposta>
					
				</div>
				
				)}
		</div>
	)

  function acionarFlashCard(i){
    let arrayinicial = [...virouflashcard]
    arrayinicial.push(i)
    setvirouflashcard(arrayinicial)
    virarpergunta(i)
    
  }

  function virarpergunta(i){
    let arrayinicial = [...abrirpergunta]
    arrayinicial.push(i)
    setabrirpergunta(arrayinicial)
  }

  function acionarResposta(i){
    setabrirpergunta([])
    let arrayinicial = [...virarresposta]
    arrayinicial.push(i)
    setresposta(arrayinicial)

  }

  function red(i){

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
  display: ${props => props.verificarflashcard ? "none":"flex"};
  align-items: center;
  justify-content: space-between;
  position: relative;
  p{
	font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
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
  display: ${props => props.abrirprimeirapergunta ? "flex":"none"};
  flex-direction: column;
  justify-content: space-between;`

const Perguntaabertaresposta= styled.div`
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
  display: ${props => props.abrirresposta? "flex":"none"};
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