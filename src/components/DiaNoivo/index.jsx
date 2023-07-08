import styled from 'styled-components';
import ImgNoivo from '../../imagem/noivo.jpg';
import Button from '../Button';

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleStyled = styled.h1`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
`;

const SubTitleStyled = styled.p`
    font-size: 25px;
    margin: 40px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 380px) {
      text-align: center;
  }
    @media screen and (max-width: 470px) {
      text-align: center;   
  }
`;

const ImgStyled = styled.img`
   margin-bottom: 20px;


    @media screen and (max-width: 380px) {
        width: 350px;
    }
        @media screen and (max-width: 470px) {
            width: 350px;  
    }
`;

const A = styled.a`

`;

export default function DiaNoivo() {
    return(
        <ContainerStyled>
            <TitleStyled>DIA DO NOIVO</TitleStyled>
            <SubTitleStyled>Aqui na Barbearia Ramos o noivo não fica perdido, 
                sozinho e isolado. Acreditamos que seus últimos momentos como solteiro 
                devem ser regados a risadas, ao lado dos melhores amigos e 
                pessoas importantes!
            </SubTitleStyled>
            <ImgStyled src={ImgNoivo} width="700"/>
            <A href="https://wa.me/5547999247819?text=Quero+fazer+um+or%C3%A7amento+do+dia+do+noivo+%21"
                  target="_blank">
                 <Button>Faça seu orçamento</Button>
                </A>
        </ContainerStyled>
    )
}