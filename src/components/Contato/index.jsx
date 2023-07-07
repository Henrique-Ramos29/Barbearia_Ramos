import styled from 'styled-components';
import Whatsapp from '../../imagem/whatsapp.gif';
import Instagram from '../../imagem/instagram.gif';

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

const ImgIcones = styled.img`
`;

const TextIcones = styled.p`
   align-items: center;
   font-size: 30px;
   font-weight: bold;
   margin: 10px;
`;

 function Contato() {


    return(
      <ContainerTitle>
        <TitleContato>CONTATO</TitleContato>
        <ContainerContato>
          <DivIcones>
            <ImgIcones src={Whatsapp} alt="Whatsapp" width="100"  height="100" />
            <TextIcones>(47) 99924-7819</TextIcones>
          </DivIcones>

          <DivIcones>
            <ImgIcones src={Instagram} alt="Instagram" width="100"  height="100"/>
            <TextIcones>Barbearia_ramos</TextIcones>
          </DivIcones>
        </ContainerContato>
      </ContainerTitle>
    )
}

export default Contato;