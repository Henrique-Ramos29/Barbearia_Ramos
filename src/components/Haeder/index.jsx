import styled from 'styled-components';
import ImagemLogo from '../../imagem/Logo-Ramos.png'
import MenuLink from '../MenuLink';
import { BiSolidHome, BiCut, BiSolidMap, BiSolidUserCircle, BiSolidTrophy, BiSolidCool, BiSolidStoreAlt } from "react-icons/bi"

const ContainerHeader = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Logo = styled.img`

       @media screen and (max-width: 380px) {
    
           width: 140px;
           height:140px;
        }
            @media screen and (max-width: 470px) {
                
                width: 140px;
                height:140px;
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
      width: 261px;
      gap: 6px;

      
  }
    @media screen and (max-width: 470px) {
        display: flex;
        flex-direction: column;
        width: 261px;
        gap: 6px;
  }
`;

const Lista = styled.li`
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;
    
      &:hover {
        scale: 1.2;
        transition: 0.6s;
      }

    @media screen and (max-width: 380px) {
        box-shadow: 7px 11px 11px rgba(0, 0, 0, 0.08);
        margin: 4px;
        border-radius: 5px;
        text-align: center;
      
  }
    @media screen and (max-width: 470px) {
        box-shadow: 7px 11px 11px rgba(0, 0, 0, 0.1);
        margin: 4px;
        border-radius: 5px;
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
                        <MenuLink  to={'/servico'}>
                            <LinkLista >
                            <BiCut size="19" />
                                Preço
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
                    <MenuLink  to={'/produto'}>
                        <LinkLista>
                        <BiSolidStoreAlt size="19" />    
                           Produtos
                        </LinkLista>
                    </MenuLink>
                    </Lista> 

                    <Lista>
                    <MenuLink  to={'/clubramos'}>
                        <LinkLista>
                        <BiSolidCool size="19" />    
                            Plano
                        </LinkLista>
                    </MenuLink>
                    </Lista> 

                    
                </ContainerLista>
              </Aba>
        </ContainerHeader>
    )
}

export default Header;