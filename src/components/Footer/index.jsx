import styled from 'styled-components'
import ImagemLogo from '../../imagem/Logo-Ramos.png'


const Rodape = styled.footer`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ImgLogo = styled.img`
      
`;

function Footer() {

    return(
       <Rodape>
        <ImgLogo src={ImagemLogo} alt="Logo Barbearia Ramos" tiltle="Logo" width="230" height="230" />
       </Rodape>
    )
}

export default Footer;