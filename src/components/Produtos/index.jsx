import styled from 'styled-components';
import db from '../../db.json';
import { useParams } from "react-router-dom"
import { BiSolidError } from "react-icons/bi";

const Container = styled.div`

`;

const Alerta = styled.h1`
    color: red;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

const ContainerStyled = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 2px;
`;

const Title = styled.h1` 
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin: 30px;
  
`;

const ListaProduto = styled.div`
  text-align: center;
  margin: 20px;


`;

const ImgProdutoStyled = styled.img`
    border-radius: 6px;
    margin-bottom: 20px;
    margin-top: 45px;

    &:hover {
        scale: 1.2;
        transition: 0.6s;
      }
`;

const TitleStyled = styled.h1`
     font-size: 20px;
     font-weight: bold;
     
`;

const DescricaoStyled = styled.p`
    font-size: 13px;
    font-weight: bold;
    text-wrap: balance;
` ;

const Valor = styled.p`
     font-size: 25px;
     font-weight: bold;
    
`;

export default function Produtos() {

    const parametros = useParams();

    /*  const post = db.find((post) => {
        return post.id === Number(parametros.id)
    })   */

    const dbRecomendados = db.filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id).slice(0, 8);

    return(
    <Container>
        <Title>PRODUTOS</Title>
         <Alerta> Pagina em desenvolvimento <BiSolidError /></Alerta>
        <ContainerStyled>
        {dbRecomendados.map((post) => (
        <ListaProduto key={post} >
            <ImgProdutoStyled src={post.img} alt="foto" width='250' height='250' />
            <TitleStyled>{post.nome}</TitleStyled>
            <Valor>{post.valor}</Valor>
            <DescricaoStyled>{post.descricao}</DescricaoStyled>
        </ListaProduto>
        ))}
        </ContainerStyled>
    </Container>
    )
}

