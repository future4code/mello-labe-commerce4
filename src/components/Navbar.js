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

export class Navbar extends React.Component {
  state = {
    quantity: 0,
  };

  render() {
    return (
      <NavbarContainer>
        <P></P>
        <select>
          <option value="crescent">Preço: Crescente</option>
          <option value="decrescent">Preço: Decrescente</option>
        </select>
      </NavbarContainer>
    );
  }
}
