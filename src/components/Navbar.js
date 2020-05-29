import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const P = styled.p`
  margin: 0;
`;

export const Navbar = (props) => {
  return (
    <NavbarContainer>
      <P>Quantidade de Produtos: {props.quantityProps}</P>
      <select>
        <option value="asc">Preço: Crescente</option>
        <option value="desc">Preço: Decrescente</option>
      </select>
    </NavbarContainer>
  );
};
