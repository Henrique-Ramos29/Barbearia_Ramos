import styled from 'styled-components';
import { BiLogoWhatsapp, BiLogoInstagram } from "react-icons/bi";

const ContainerTitle = styled.div`
    
   
`;

const TitleContato = styled.h1`
   font-size: 40px;
   font-weight: bold;
   text-align: center;
   margin: 40px;
`;

const ContainerContato = styled.div`
   display: flex;
   justify-content: center;
   gap: 50px;
   
   @media screen and (max-width: 380px) {
      display flex;
      flex-direction: column;
  }
        @media screen and (max-width: 480px) {
      display flex;
      flex-direction: column;
  }
`;

const DivIcones = styled.div`
   display: flex;
   flex-direction: column;
   margin: 30px;
   align-items: center;

`;

const TextIcones = styled.p`
   display: flex;
   text-align: center;
   align-items: center;
   font-size: 40px;
   font-weight: bold;
   margin: 10px;

    &:hover {
      scale: 1.4;
      transition: 0.9s;
    }

    @media screen and (max-width: 380px) {
      font-size: 30px;
  }
        @media screen and (max-width: 480px) {
          font-size: 30px;
  }
`;

const A = styled.a`
   text-decoration: none;
   color: black;
   
`;

 function Contato() {


    return(
      <ContainerTitle>
        <TitleContato>CONTATO</TitleContato>
        <ContainerContato>
          <DivIcones>
           <A target="_black" href="https://wa.me/5547988274347?text=Oi+queria+uma+ajuda+%3F">
            <TextIcones>
              <BiLogoWhatsapp size="70" />
            (47) 98827-4347
            </TextIcones>
             </A>
          
               <A target="_black" href="https://instagram.com/barbearia_ramos_23?igshid=ZDc4ODBmNjlmNQ==">
              <TextIcones>
              <BiLogoInstagram size="70" />
              Barbearia_ramos
              </TextIcones>
               </A>
          </DivIcones>
        </ContainerContato>
      </ContainerTitle>
    )
}

export default Contato;