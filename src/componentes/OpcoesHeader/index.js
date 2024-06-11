import styled from "styled-components";

const Opcao = styled.li`
  height: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  min-width: 120px;
  cursor: pointer;
`

const Opcoes = styled.ul`
  display: flex;
`

const textoOpcoes = ["Categorias", "Minha Estante", "Favoritos"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
