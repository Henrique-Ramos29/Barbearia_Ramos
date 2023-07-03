import styled from 'styled-components';
import ImagemLogo from '../../imagem/Logo-Ramos.png'


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
`;

const Link = styled.a`
     text-decoration: none;
     color: black;
`;

function Header() {
    return(
        <ContainerHeader>
            <Logo src={ImagemLogo} alt='Logo Barbearia Ramos' width='250' height='250'/>
              <Aba>
                <ContainerLista>
                    <Lista><Link href="#">HOME</Link></Lista>
                    <Lista><Link href="#">SERVIÇOS</Link></Lista>
                    <Lista><Link href="#">LOCALIZAÇÃO</Link></Lista>
                    <Lista><Link href="#">CONTATO</Link></Lista>
                </ContainerLista>
              </Aba>
        </ContainerHeader>
    )
}

export default Header;