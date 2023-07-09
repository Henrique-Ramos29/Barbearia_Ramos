import styled from 'styled-components';
import ImgCabelo from '../../imagem/cabelo.jpg';
import ImgBarba from '../../imagem/barba.jpg';
import ImgCabeloBarba from '../../imagem/cabelo - barba.jpg';


const DisplayFlex = styled.div`
      display: flex;
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
`;


const DivContainer = styled.div`
     display: flex;
     flex-direction: column; 
     gap: 12px;
     
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
        scale: 1.3;
        transition: .5s;
      }

    @media screen and (max-width: 380px) {
      margin-left: 66px;
      width: 270px;
  }
     @media screen and (max-width: 470px) {
        margin-left: 66px; 
        width: 270px; 
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

const A = styled.a`
  
  
  &:hover {
        border-color: blue;
      }
`;


const Servico = () => {
    return(
        <DivContainer>
            <Title>SERVIÇOS</Title>
              <SubTitle>Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos clientes</SubTitle>
        <DisplayFlex>    
          <DivContainer>
            <A to={'/'}>
              <ImgProduto src={ImgCabelo} width='270' height='270' />
            </A>
            <Paragrafo>Cabelo</Paragrafo>
          </DivContainer>
          <DivContainer>
            <ImgProduto src={ImgBarba} width='270' height='270' />
            <Paragrafo>Barba</Paragrafo>  
          </DivContainer>
          <DivContainer>
            <ImgProduto src={ImgCabeloBarba} width='270' height='270' />
            <Paragrafo>Cabelo + Barba</Paragrafo>
          </DivContainer>
        </DisplayFlex>
        </DivContainer>
    )
}

export default Servico;