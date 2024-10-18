import styled from 'styled-components';
import Button from '../Button'

const ContainerTitle = styled.div`
    
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    
`;

const ContainerMap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleMap = styled.h2`
    font-size: 25px;
    margin: 40px;
    font-weight: bold;

    @media screen and (max-width: 380px) {
      text-align: center;
  }
    @media screen and (max-width: 470px) {
      text-align: center;   
  }
`;

const MapLocalizacao = styled.iframe`
    border-radius: 6px;
    margin: 10px;
    margin: 25px;

    @media screen and (max-width: 380px) {
        width: 380px;
      height: 38px;   
  }
  @media screen and (max-width: 470px) {
      width: 380px;
      height: 380px;   
  }
    
`;

const TagA = styled.a`
   margin-bottom: 20px;
`;


export default function Map() {
    return(
    <ContainerTitle>
        <Title>LOCALIZAÇÃO</Title>
        <ContainerMap>
            <TitleMap>Nosso estabelecimento está localizado no municipio de Vigia de Nazare.</TitleMap>
                <MapLocalizacao 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7978.754285860549!2d-48.13735774999997!3d-0.8520630000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1729191198361!5m2!1spt-PT!2sbr"
                width="700" height="450"  allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </MapLocalizacao>
                <TagA
                  href="https://maps.app.goo.gl/JihP1rT55o7UwxWe9"
                  target="_blank">
                 <Button>Direção</Button>
                </TagA>
        </ContainerMap>
    </ContainerTitle>
    )
}