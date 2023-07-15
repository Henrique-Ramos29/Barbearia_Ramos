import styled from 'styled-components';
import Button from '../Button';

const ContainerTitle = styled.div`

`;

const TitleContainer = styled.h1`
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin: 50px;
`;

const ContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`;

const CaixaStyled = styled.div`
   text-align: center;
   background-color: black;
   width: 324px;
   height: 500px;
   border-radius: 20px;
   box-shadow: 9px 7px 8px rgb(94 91 91 / 20%);
   cursor: pointer;
   
    &:hover {
        scale: 1.1;
        transition: 0.7s;
    }
    
    @media screen and (max-width: 380px) {
          margin-left: 49px;

          &:hover {
        scale: 1.1;
        transition: 0.5s;
    }
      
  }
    @media screen and (max-width: 470px) {
        margin-left: 49px;
        
            &:hover {
            scale: 1.1;
            transition: 0.5s;
        }
  }
`;

const TitlePlano = styled.h1`
    color: white;
    font-size: 40px;
    margin-bottom: 30px;
    margin-top: 25px;
`;

const ParagrafoStyled = styled.p`
    color: white;
    font-size: 18px;
    margin-bottom: 40px;
    
`;

const Valor = styled.p`
    color: white;
    font-size: 40px;
`;

const Paragrafo = styled.p`
  color: white;
  font-size: 13px;
  margin-bottom: 30px;
`;

const A = styled.a`
    text-decoration: none;
`;

export default function Plano() {
    return(
    <ContainerTitle>
       <TitleContainer>Escolha um plano e faça parte do clube!</TitleContainer>
        <ContainerStyled>
            <CaixaStyled>
                <TitlePlano>
                 Cabelo
                </TitlePlano>
            <Valor>
                 R$ 100,00
            </Valor>
               <ParagrafoStyled>
                por mês
               </ParagrafoStyled>
               <Paragrafo>
               Corte o cabelo quantas vezes quiser!
               </Paragrafo>
               <Paragrafo>
               Convidado VIP mês do aniversário
               </Paragrafo>
               <Paragrafo>
               Desconto Consumo Barbearia (Cerveja, café, água e etc)
               </Paragrafo>
               <A href="https://wa.me/5547988274347?text=Quero+entra+no+Club+Ramos+%21" 
               target="_blank">
               <Button>Assinar</Button>
               </A>
            </CaixaStyled>

            <CaixaStyled>
                <TitlePlano>
                 Cabelo & Barba
                </TitlePlano>
            <Valor>
                 R$ 150,00
            </Valor>
               <ParagrafoStyled>
                por mês
               </ParagrafoStyled>
               <Paragrafo>
               Corte o cabelo quantas vezes quiser!
               </Paragrafo>
               <Paragrafo>
               Faça a barba quantas vezes quiser!
               </Paragrafo>
               <Paragrafo>
               Convidado VIP mês do aniversário.
               </Paragrafo>
               <Paragrafo>
               Desconto Consumo Barbearia (Cerveja, café, água e etc)
               </Paragrafo>
               <A href="https://wa.me/5547988274347?text=Quero+entra+no+Club+Ramos+%21" 
               target="_blank">
               <Button>Assinar</Button>
               </A>
            </CaixaStyled>

            <CaixaStyled>
                <TitlePlano>
                 Barba
                </TitlePlano>
            <Valor>
                 R$ 100,00
            </Valor>
               <ParagrafoStyled>
                por mês
               </ParagrafoStyled>
               <Paragrafo>
               Faça a barba quantas vezes quiser!
               </Paragrafo>
               <Paragrafo>
               Convidado VIP mês do aniversário
               </Paragrafo>
               <Paragrafo>
               Desconto Consumo Barbearia (Cerveja, café, água e etc)
               </Paragrafo>
               <A href="https://wa.me/5547988274347?text=Quero+entra+no+Club+Ramos+%21" 
               target="_blank">
               <Button>Assinar</Button>
               </A>
            </CaixaStyled>
        </ContainerStyled>
    </ContainerTitle>
    )
}
