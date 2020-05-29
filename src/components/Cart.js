import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  justify-self: right;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  border: 1px solid #000;
  border-image: initial;
`;

const H2 = styled.h2`
  margin: 5px 0;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
`;

export const Cart = (props) => {
  return (
    <CartContainer>
      {renderizaCarrinho()}
      <H2>Carrinho:</H2>
      <Ul></Ul>
      <p>
        Total: <b>R$</b>
      </p>
      <Button onClick={this.mostraCarrinho}>X</Button>
    </CartContainer>
  );
};
