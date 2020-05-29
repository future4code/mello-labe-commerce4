import React from "react";
import styled from "styled-components";

import { ProductList } from "./components/ProductList";

const AppContainer = styled.div`
  width: 100%;
  margin: 0;

  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <ProductList />
      </AppContainer>
    );
  }
}

export default App;
