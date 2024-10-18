import styled from 'styled-components';
import ImgCabelo from '../../imagem/cabelo.jpg';
import ImgBarba from '../../imagem/barba.jpg';
import ImgCabeloBarba from '../../imagem/cabelo - barba.jpg';
import ImgCorteSocial from '../../imagem/social.jpg'


const DisplayFlex = styled.div`
      display: flex;
      position: relative;
      justify-content: center;
      gap: 70px;      

  @media screen and (max-width: 380px) {
      display: flex;
      flex-direction: column;
  }

  @media screen and (max-width: 470px) {
      display: flex;
      flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}

`;


const DivContainer = styled.div`

     display: flex;
     flex-direction: column; 
     gap: 12px;
     margin: 10px;
     
`;


const Title = styled.h1`
     text-align: center;
     font-weight: bold;
     font-size: 40px;
     margin: 23px;
`;

const SubTitle = styled.h2`
     text-align: center;
     font-size: 25px;
     font-weight: bold;
     margin: 15px;
     
`;

const ImgProduto = styled.img`
    border-radius: 150px;
    cursor: pointer;

    &:hover {
        opacity: 70%;
        scale: 1.1;
        transition: .5s;
      }

    @media screen and (max-width: 380px) {
      margin-left: 47px;
      width: 270px;
  }
     @media screen and (max-width: 470px) {
      margin-left: 0;
      width: 266px; 
  }
  @media screen and (max-width: 768px) {
      align-self: center;
  }
`;

const Paragrafo = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    &:hover {
       color: #555555;
      }
`;

const Valor = styled.p` 
  color: black;
  font-size: 30px;
  text-align: center;
  weight: bold;

   &:hover {
    color: #555555;
  }

`;

const A = styled.a`
  
  
  &:hover {
        border-color: blue;
      }

      @media screen and (max-width: 768px) {
        align-self: center;
    }
`;


const Servico = () => {

  return (
    <DivContainer>
      <Title>SERVIÇOS</Title>
      <SubTitle>Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos clientes</SubTitle>
      <DisplayFlex>
        <DivContainer>
          <A to={'/'}>
            <ImgProduto src={ImgCorteSocial} width='270' height='270' />
          </A>
          <Valor>R$ 10.00</Valor>
          <Paragrafo>Corte Social</Paragrafo>
        </DivContainer>

        <DivContainer>
          <A to={'/'}>
            <ImgProduto src={ImgCabelo} width='270' height='270' />
          </A>
          <Valor>R$ 15.00</Valor>
          <Paragrafo>Corte Degradê</Paragrafo>
        </DivContainer>
        <DivContainer>
          <ImgProduto src={ImgBarba} width='270' height='270' />
          <Valor>R$ 10.00</Valor>
          <Paragrafo>Barba</Paragrafo>
        </DivContainer>

      </DisplayFlex>
    </DivContainer>
  )
}

export default Servico;