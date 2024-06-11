import styled from 'styled-components';
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
const LogoImagem = styled.img`
  margin-right: 10px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImagem 
        src={logo} 
        alt="logo" 
        />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;