
import styled from 'styled-components';
import ImagemBanner from '../../imagem/Banner01.jpg';
import Button from '../Button';

const Container = styled.div`
     position: relative;
`;

const Imagem = styled.img`
   width: 100%;
`;

const Paragrafo = styled.p`
   font-family: 'Roboto', sans-serif;
   font-size: 45px;
   color: white;
   margin-bottom: 10px;
   text-shadow: 0.1em 0.1em 0.05em #333;

   @media screen and (max-width: 380px) {
      font-size: 30px;
  }
  @media screen and (max-width: 470px) {
      font-size: 30px;   
  }
`; 

const Paragrafo02 = styled.p`
   font-family: 'Roboto', sans-serif;
   font-size: 30px;
   color: white;
   margin-bottom: 10px;
   text-shadow: 0.1em 0.1em 0.05em #333;

   @media screen and (max-width: 380px) {
      font-size: 15px;
  }
  @media screen and (max-width: 470px) {
      font-size: 15px;   
  }
   
`;

const Divi = styled.div`
   position: absolute;
   top: 250px;
   left: 100px;
   gap: 17px;
`;

export default function Banner() {
    return (
        <Container>
            <Imagem src={ImagemBanner} alt='Imagem Banner' title='Banner' height="600" />
            <Divi>
             <Paragrafo>Agende agora seu horário!</Paragrafo>
             <Paragrafo02>Segunda a Sábado das 8:30 as 18:00</Paragrafo02>
             <Button>AGENDAR</Button>
            </Divi>
        </Container>
    )
}
