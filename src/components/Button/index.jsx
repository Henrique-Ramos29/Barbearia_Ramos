import styled from 'styled-components'

const Botao = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  background-color: black; /* Green */
  border-radius: 10px;
  border: 2px solid white;
  color: white;
  padding: 7px 68px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background: #555555;
  }
`;

export default function Button({children}) {
    return(
        <Botao>{children}</Botao>
    )
}


