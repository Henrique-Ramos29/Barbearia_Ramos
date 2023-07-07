import styled from 'styled-components';
import ImagemLogo from '../../imagem/Logo-Ramos.png'
import MenuLink from '../MenuLink';
import { BiSolidHome, BiLogoPeriscope, BiSolidUserCircle, BiSolidHeart } from "react-icons/bi"

const ContainerHeader = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Logo = styled.img`
     
`;

const Aba = styled.nav`
   
`;

const ContainerLista = styled.ul`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 380px) {
      display: flex;
      flex-direction: column;

      
  }
    @media screen and (max-width: 470px) {
        display: flex;
        flex-direction: column;
  }
`;

const Lista = styled.li`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;

    @media screen and (max-width: 380px) {
        box-shadow: 7px 11px 11px rgba(0, 0, 0, 0.08);
        margin: 4px;
        border-radius: 7px;
        text-align: cente;
      
  }
    @media screen and (max-width: 470px) {
        box-shadow: 7px 11px 11px rgba(0, 0, 0, 0.08);
        margin: 4px;
        border-radius: 7px;
        text-align: center;
        
  }
`;

const LinkLista = styled.a`
     
     text-decoration: none;
     color: black;
  
       &:hover {
         color: #555555;
       }

`;

function Header() {
    return(
        <ContainerHeader>
            <Logo src={ImagemLogo} alt='Logo Barbearia Ramos' width='250' height='250'/>
              <Aba>
                <ContainerLista>
                    
                    <Lista>
                        <MenuLink  to={'/'}>
                         <LinkLista>
                           <BiSolidHome size="18" />
                            Home
                         </LinkLista> 
                        </MenuLink>
                    </Lista>

                    <Lista>
                        <MenuLink  to={'/map'}>
                            <LinkLista >
                            <BiLogoPeriscope size="18" />
                                Localização
                             </LinkLista>
                        </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/contato'}>
                        <LinkLista>
                         <BiSolidUserCircle size="18" />
                            Contato
                        </LinkLista>
                    </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/fidelidade'}>
                        <LinkLista>
                        <BiSolidHeart size="18" />    
                            Fidelidade
                        </LinkLista>
                    </MenuLink>
                    </Lista>
                </ContainerLista>
              </Aba>
        </ContainerHeader>
    )
}

export default Header;