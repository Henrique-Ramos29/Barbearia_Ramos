import styled from 'styled-components';
import ImagemLogo from '../../imagem/Logo-Ramos.png'
import MenuLink from '../MenuLink';

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
`;

const Lista = styled.li`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;

      
`;

const LinkLista = styled.a`
     
     text-decoration: underline;
     color: black;
  
       &:hover {
         color: white;
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
                            Home
                         </LinkLista> 
                        </MenuLink>
                    </Lista>

                    <Lista>
                        <MenuLink  to={'/map'}>
                            <LinkLista >
                                Localização
                             </LinkLista>
                        </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/contato'}>
                        <LinkLista>
                            Contato
                        </LinkLista>
                    </MenuLink>
                    </Lista>

                    <Lista>
                    <MenuLink  to={'/fidelidade'}>
                        <LinkLista>
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