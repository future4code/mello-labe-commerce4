import React from "react";
import styled from "styled-components";

const CarrinhoPanel = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <CarrinhoPanel>
        <h1>Carrinho:</h1>

        <p>
          Total: <strong>R${this.props.valorTotal}</strong>
        </p>
      </CarrinhoPanel>
    );
  }
}

export default Carrinho;
