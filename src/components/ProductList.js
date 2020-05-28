import React from "react";
import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";

const ProductContainer = styled.div`
  padding: 5px;
  display: block;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

class SeguraArray extends React.Component { 
  state = {
     listaDeProdutos = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/200/200?a=1",
    description: "Imagem do produto 1",
    name: "Item A",
    value: 199,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/200/200?a=2",
    description: "Imagem do produto 2",
    name: "Item B",
    value: 55.9,
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/200/200?a=3",
    description: "Imagem do produto 3",
    name: "Item C",
    value: 99,
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/200/200?a=4",
    description: "Imagem do produto 4",
    name: "Item D",
    value: 80,
  },
]
}
}

export class ProductList extends React.Component {
  render () {

    const renderedList = this.setState.listaDeProdutos.map((product) => {
      return (
        <Card
          key={product.id}
          imageUrl={product.imageUrl}
          description={product.description}
          name={product.name}
          value={product.value.toFixed(2)}
        />
      );
    });

  return (
    <ProductContainer>
      <Navbar />
      <ListContainer>{renderedList}</ListContainer>
    </ProductContainer>
  );
  }
};

