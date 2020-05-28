import React from "react";
import Carrinho from "./components/Carrinho";
import "./App.css";
import Home from "./Home";
import Filtro from "./Filtro";
import styled from "styled-components";

const BotaoCarrinho = styled.button`
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

const DivCarrinho = styled.div`
  margin: 0;
  height: 75vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyleFiltros = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  float: left;
  height: auto;
  width: 300px;
  border: 1px solid #999;
`;
const StyleProdutos = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20vh;
`;

class App extends React.Component {
  state = {
    listaDosProdutos: [
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
    ],

    carrinhoVisivel: "",
    carrinho: [],
  };

  /* FILTRO */
  onChangeValorMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

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

  render() {
    /* FILTRO */
    let listaFiltrada = this.state.listaDosProdutos;
    if (this.state.inputValorMinimo !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.valor >= this.state.inputValorMinimo;
      });
    }
    if (this.state.inputValorMaximo !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.valor <= this.state.inputValorMaximo;
      });
    }
    if (this.state.inputNome !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.nome
          .toLowerCase()
          .includes(this.state.inputNome.toLowerCase());
      });
    }

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

    return (
      <div className="App">
        <StyleFiltros>
          <Filtro
            valorMinimo={this.state.inputValorMinimo}
            valorMaximo={this.state.inputValorMaximo}
            nome={this.state.inputNome}
            onChangeValorMaximo={this.onChangeValorMaximo}
            onChangeValorMinimo={this.onChangeValorMinimo}
            onChangeNome={this.onChangeNome}
          />
        </StyleFiltros>
        <StyleProdutos>
          <Home listaDosProdutos={listaFiltrada} />
        </StyleProdutos>
        <DivCarrinho>
          <BotaoCarrinho onClick={this.mostraCarrinho}>X</BotaoCarrinho>
          {renderizaCarrinho()}
        </DivCarrinho>
        );
      </div>
    );
  }
}

export default App;

/* class App extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        carrinhoVisivel: "",
        carrinho: [],
        itens: itens,
        filtros: {
          valorMinimo: null,
          valorMaximo: null,
        },
    }
}

  adicionarAoCarrinho = (item) => {
    const novoCarrinho = [...this.state.cart];
    const indiceDoItem = this.state.cart.pegaIndex((produto) => produto.item.id === item.id);

    if (indiceDoItem > -1) {
      novoCarrinho[indiceDoItem].quantidade += 1
    } else { 
      novoCarrinho.push({ item: item, quantidade: 1})
    }

    this.setState({
      carrinho: novoCarrinho,
    })
  }

  equacaoValorTotal = () => {
    let total = this.state.carrinho.reduce((prev, next) => prev + next.valor,0);

    return total;
  }

  equacaoQuantidadeItens = () => {
    let keeper = {};

    this.state.carrinho.forEach(function (d) {
      if (keeper.hasOwnProperty(d.nome)) {
        keeper[d.nome] = keeper[d.nome] + d.valor;
      } else {
        keeper[d.nome] = d.valor;
      }
    })
  }

  mostraCarrinho = () => {
    if (this.state.carrinhoVisivel === "") {
      this.setState({ carrinhoVisivel: "VISIVEL" })
    } else {
      this.setState({ carrinhoVisivel: "" })
    }
  }

  apagaItemDoCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      carrinho: novoCarrinho,
    });
  }

  render() {
    const renderizaCarrinho = () => {
      switch (this.state.carrinhoVisivel) {
        case "":
          return false;
        case "VISIVEL":
          return <Carrinho valorTotal={this.equacaoValorTotal}/>
        default:
          return false; 
      }
    }

    return (
      <DivCarrinho>
      <BotaoCarrinho onClick={this.mostraCarrinho}>X</BotaoCarrinho>
      {renderizaCarrinho()}
      </DivCarrinho>
      );
    }
  } */
