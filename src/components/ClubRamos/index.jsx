import styled from 'styled-components';
import ImgClub from '../../imagem/Club-Ramos.gif';
import Plano from '../Plano';

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
    margin-bottom: 30px;
`;

const SubTitleStyled = styled.p`
    font-size: 35px;
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

const ParagrafoStyled = styled.p`
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    max-width: 1000px;
    margin-bottom: 12px;
    
`;

const ImgStyled = styled.img`
   margin-bottom: 20px;


    @media screen and (max-width: 380px) {
        width: 350px;
        height: 250px;
    }
        @media screen and (max-width: 470px) {
            width: 350px;  
            height: 250px;
    }
`;

export default function ClubRamos() {
    return(
        <>
        <ContainerStyled>
            <TitleStyled>CLUB RAMOS</TitleStyled>
            <ImgStyled src={ImgClub} width="1000" height="500" />
            <SubTitleStyled>
              Porque devo assinar o Club Ramos ?
            </SubTitleStyled>

                <ParagrafoStyled>
                Sabe aquele dia em que você tem um evento importante, uma reunião, festinha com amigos ou jantar com alguém especial e fica sentindo-se mal pois percebeu que está com o cabelo desajeitado ou com o “pézinho” mal feito e cheio de pelos no pescoço? 
                </ParagrafoStyled>
                <ParagrafoStyled>
                Ou quando você está em casa e se lembra que precisa fazer a barba, mas aí bate uma preguiça só de pensar em pegar no presto barba, deixar a pia toda suja de pelos, aquela zona no banheiro! 
                </ParagrafoStyled>
                <ParagrafoStyled>
                Uma solução para essas situações seria você fazer a barba toda semana na barbearia ou cortar o cabelo com maior frequência, certo? Certo!
                </ParagrafoStyled>
                <ParagrafoStyled>
                Mas aí o custo para manter sua imagem pessoal ficaria alto não é mesmo? Errado!   
                E se eu te disser que temos a solução perfeita pra você!
                </ParagrafoStyled>
                <ParagrafoStyled>
                Um clube de assinatura de cabelo e barba! Que tal vir na barbearia alinhar sua barba e seu cabelo quantas vezes quiser, ilimitado e pagar apenas um valor fixo por mês pra isso?
                </ParagrafoStyled>
                <ParagrafoStyled>
                Sem pegadinha, corte e barba a vontade com um único valor mensal! E de quebra aproveitar todas as vantagens Club Ramos.
                </ParagrafoStyled>
                <Plano />
        </ContainerStyled>
        </>
    )
}