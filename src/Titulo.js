import logo from './assets/img/logo.png'
import styled from 'styled-components'

export default function Titulo(){
    return (
        <Logocontainer>
            <Logocontainerimagem src={logo}/>
            <Logocontainertitulo>ZapRecall</Logocontainertitulo>
        </Logocontainer>
    )
}

const Logocontainer = styled.div`
display: flex;
align-items: center;
margin: 40px 0 20px 0;`

const Logocontainerimagem = styled.img`
width: 52px;`

const Logocontainertitulo = styled.h1`
font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;`