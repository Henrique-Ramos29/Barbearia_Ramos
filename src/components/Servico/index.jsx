import styled from 'styled-components';
import ImgCabelo from '../../imagem/cabelo.jpg';
import ImgBarba from '../../imagem/barba.jpg';
import ImgCabeloBarba from '../../imagem/cabelo - barba.jpg';


const DisplayFlex = styled.div`
      display: flex;
      justify-content: center;
      gap: 40px;

  @media screen and (max-width: 380px) {
      display: flex;
      flex-direction: column;
  }

  @media screen and (max-width: 470px) {
      display: flex;
      flex-direction: column;
  }
`;


const DivContainer = styled.div`
     display: flex;
     flex-direction: column; 
     gap: 12px;
`;


const Title = styled.h1`
     font-family: 'Roboto', sans-serif;
     text-align: center;
     font-weight: bold;
     font-size: 40px;
     margin: 23px;
`;

const SubTitle = styled.h2`
     font-family: 'Roboto', sans-serif;
     text-align: center;
     font-size: 25px;
     font-weight: bold;
     margin: 15px;
     
`;

const ImgProduto = styled.img`
    border-radius: 150px;

    @media screen and (max-width: 380px) {
      margin-left: 60px;
  }
  @media screen and (max-width: 470px) {
      margin-left: 60px;   
  }
`;

const Paragrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    &:hover {
       color: #555555;
      }
`;

const Servico = () => {
    return(
        <DivContainer>
            <Title>SERVIÇOS</Title>
              <SubTitle>Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos clientes</SubTitle>
        <DisplayFlex>    
          <DivContainer>
            <ImgProduto src={ImgCabelo} width='300' height='300' />
            <Paragrafo>Cabelo</Paragrafo>
          </DivContainer>
          <DivContainer>
            <ImgProduto src={ImgBarba} width='300' height='300' />
            <Paragrafo>Barba</Paragrafo>  
          </DivContainer>
          <DivContainer>
            <ImgProduto src={ImgCabeloBarba} width='300' height='300' />
            <Paragrafo>Cabelo + Barba</Paragrafo>
          </DivContainer>
        </DisplayFlex>
        </DivContainer>
    )
}

export default Servico;