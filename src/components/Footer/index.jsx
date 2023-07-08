import styled from 'styled-components'
import ImagemLogo from '../../imagem/Logo-Ramos.png'


const Rodape = styled.footer`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ImgLogo = styled.img`

   @media screen and (max-width: 380px) {
           width: 200px;
           height:200px;
        }
            @media screen and (max-width: 470px) {
                width: 200px;
                height:200px;
        }
      
`;

const ParagrafoStyled = styled.p`

`

function Footer() {

    return(
       <Rodape>
        <ImgLogo src={ImagemLogo} alt="Logo Barbearia Ramos" tiltle="Logo" width="230" height="230" />
          <ParagrafoStyled>Developer Henrique Ramos</ParagrafoStyled>
       </Rodape>
    )
}

export default Footer;