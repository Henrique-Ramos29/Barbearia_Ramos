import styled from 'styled-components';
import ImgF from '../../imagem/fidelidade.gif';

const ContainerFidelidade = styled.div` 
   font-family: 'Roboto', sans-serif;
   margin: 35px;
   
`;

const ContainerImagem = styled.div`
    display: flex;
    justify-content: center;
`;

const ImgFidelidade = styled.img`
   align-items: center;
   @media screen and (max-width: 380px) {
        width: 364px;
        height: 232px
  }
        @media screen and (max-width: 480px) {
            width: 364px;
            height: 232px
        }
`;

const Title = styled.h1`
   text-align: center;
   font-size: 40px;
   font-weight: bold;
   

`;

const SubTitle = styled.p`
   text-align: center;
   font-size: 17px;
   font-weight: bold;
   margin: 20px;
`;




function Fidelidade() {
    return(
        <ContainerFidelidade>
            <Title>PROGRAMA DE FIDELIDADE</Title>

            <SubTitle>
                Na Barbearia Ramos os clientes 
                participam automaticamente do Programa de Fidelidade.
            </SubTitle>
            <SubTitle>
                A cada 08 serviços realizados o cliente ganha 01 serviço 
                de corte de cabelo ou de barba, aqui o cliente é reconhecido.
            </SubTitle>
                <ContainerImagem>
                  <ImgFidelidade src={ImgF} alt="Cartão Fidelidade" title="Cartão Fidelidade" 
                  width="700" height="400" />
                </ContainerImagem>
            <SubTitle>
                 OBS: O resgate do serviço grátis não poderá ser feito aos SÁBADOS.
            </SubTitle>
        </ContainerFidelidade>
    )
}

export default Fidelidade;