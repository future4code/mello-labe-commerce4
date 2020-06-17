import React from "react";
import styled from "styled-components";

import { Home } from "./components/Home";

const AppContainer = styled.div`
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;

  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Home />
      </AppContainer>
    );
  }
}

export default App;
