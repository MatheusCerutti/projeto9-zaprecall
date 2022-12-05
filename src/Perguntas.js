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
	return (
		<div>
			{cards.map((deck) =>
				<div>
					<Perguntafechada>
						<p>Pergunta {contador}</p>
						<img src={play}></img>
					</Perguntafechada>
					<Perguntaaberta>
						{deck.question}
						<Perguntaabertaimagem src={virar} />
					</Perguntaaberta>
					<Perguntaaberta>
						{deck.answer}
						<Perguntaabertacaixabotao>
							<Perguntaabertabotaovermelho>Não lembrei</Perguntaabertabotaovermelho>
							<Perguntaabertabotaoamarelo>Quase não lembrei</Perguntaabertabotaoamarelo>
							<Perguntaabertabotaoverde>Zap!</Perguntaabertabotaoverde>
						</Perguntaabertacaixabotao>

					</Perguntaaberta>
					
				</div>
				
				)}
		</div>
	)

	function contar(){
		let atual = contador + 1
		console.log(atual)
		
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
  display: flex;
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

const Perguntaaberta = styled.div`
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
  display: flex;
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

const Perguntaabertabotaoverde = styled.div`
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
  background: #2FBE34;
  box-sizing: border-box;
  border-radius: 5px;
  padding:5px;`

const Perguntaabertabotaoamarelo = styled.div`
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
background: #FF922E;
box-sizing: border-box;
border-radius: 5px;
padding:5px;`

const Perguntaabertabotaovermelho = styled.div`
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
  background: #FF3030;
  box-sizing: border-box;
  border-radius: 5px;
  padding:5px;`