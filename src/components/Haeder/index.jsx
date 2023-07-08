import styled from 'styled-components';
import ImagemLogo from '../../imagem/Logo-Ramos.png'
import MenuLink from '../MenuLink';
import { BiSolidHome, BiSolidMap, BiSolidUserCircle, BiSolidTrophy, BiSolidHappyAlt } from "react-icons/bi"

const ContainerHeader = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 11px;
`;

const Logo = styled.img`

       @media screen and (max-width: 380px) {
           width: 200px;
           height:200px;
        }
            @media screen and (max-width: 470px) {
                width: 200px;
                height:200px;
        }
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
      width: 330px;

      
  }
    @media screen and (max-width: 470px) {
        display: flex;
        flex-direction: column;
        width: 330px;
  }
`;

const Lista = styled.li`
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;

    @media screen and (max-width: 380px) {
        box-shadow: 7px 11px 11px rgba(0, 0, 0, 0.08);
        margin: 9px;
        border-radius: 7px;
        text-align: cente;
      
  }
    @media screen and (max-width: 470px) {
        box-shadow: 7px 11px 11px rgba(0, 0, 0, 0.08);
        margin: 9px;
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
                            <BiSolidMap size="19" />
                                Localização
                             </LinkLista>
                        </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/contato'}>
                        <LinkLista>
                         <BiSolidUserCircle size="19" />
                            Contato
                        </LinkLista>
                    </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/fidelidade'}>
                        <LinkLista>
                        <BiSolidTrophy size="19" />    
                            Fidelidade
                        </LinkLista>
                    </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/noivo'}>
                        <LinkLista>
                        <BiSolidHappyAlt size="19" />    
                            Dia do Noivo
                        </LinkLista>
                    </MenuLink>
                    </Lista>
                </ContainerLista>
              </Aba>
        </ContainerHeader>
    )
}

export default Header;