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

export class Home extends React.Component {
  state = {
    carrinhoVisivel: "",
    carrinho: [],

    productList: [
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
      {
        id: 5,
        imageUrl: "https://picsum.photos/200/200?a=5",
        description: "Imagem do produto 5",
        name: "Item E",
        value: 40.5,
      },
      {
        id: 6,
        imageUrl: "https://picsum.photos/200/200?a=6",
        description: "Imagem do produto 6",
        name: "Item F",
        value: 499.99,
      },
      {
        id: 7,
        imageUrl: "https://picsum.photos/200/200?a=7",
        description: "Imagem do produto 7",
        name: "Item G",
        value: 501,
      },
      {
        id: 8,
        imageUrl: "https://picsum.photos/200/200?a=8",
        description: "Imagem do produto 8",
        name: "Item H",
        value: 210,
      },
    ],
  };

  render() {
    /* CARRINHO */
    adicionarAoCarrinho = (item) => {
      const novoCarrinho = [...this.state.cart];
      const indiceDoItem = this.state.cart.pegaIndex(
        (produto) => produto.item.id === item.id
      );

      if (indiceDoItem > -1) {
        novoCarrinho[indiceDoItem].quantidade += 1;
      } else {
        novoCarrinho.push({ item: item, quantidade: 1 });
      }

      this.setState({
        carrinho: novoCarrinho,
      });
    };

    equacaoValorTotal = () => {
      let total = this.state.carrinho.reduce(
        (prev, next) => prev + next.value,
        0
      );

      return total;
    };

    equacaoQuantidadeItens = () => {
      let keeper = {};

      this.state.carrinho.forEach(function (d) {
        if (keeper.hasOwnProperty(d.nome)) {
          keeper[d.nome] = keeper[d.nome] + d.valor;
        } else {
          keeper[d.nome] = d.valor;
        }
      });
    };

    mostraCarrinho = () => {
      if (this.state.carrinhoVisivel === "") {
        this.setState({ carrinhoVisivel: "VISIVEL" });
      } else {
        this.setState({ carrinhoVisivel: "" });
      }
    };

    apagaItemDoCarrinho = (id) => {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        return item.id !== id;
      });

      this.setState({
        carrinho: novoCarrinho,
      });
    };

    const renderizaCarrinho = () => {
      switch (this.state.carrinhoVisivel) {
        case "":
          return false;
        case "VISIVEL":
          return <Carrinho valorTotal={this.equacaoValorTotal} />;
        default:
          return false;
      }
    };

    const renderedProductsQuantity = this.state.productList.length;

    const renderedProductList = this.state.productList.map((product) => {
      return (
        <Card
          key={product.id}
          imageUrlProps={product.imageUrl}
          descriptionProps={product.description}
          nameProps={product.name}
          valueProps={product.value.toFixed(2)}
        />
      );
    });

    return (
      <ProductContainer>
        <Navbar quantityProps={renderedProductsQuantity} />
        <ListContainer>{renderedProductList}</ListContainer>
      </ProductContainer>
    );
  }
}

{
  /* <StyleFiltros>
    <Filtro
      valorMinimo={this.state.inputValorMinimo}
      valorMaximo={this.state.inputValorMaximo}
      nome={this.state.inputNome}
      onChangeValorMaximo={this.onChangeValorMaximo}
      onChangeValorMinimo={this.onChangeValorMinimo}
      onChangeNome={this.onChangeNome}
    />
  </StyleFiltros> */
}
