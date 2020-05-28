import React from 'react';
import Home from './components/Home';
import Filtro from './components/Filtro';
import styled from 'styled-components';

const StyleFiltros = styled.div`
margin-top:5px;
margin-left:15px;
float:left;
height:550px;
width:250px;
border: 1px dotted black;
`
const teste = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`




class App extends React.Component {

  state = {
    listaDosProdutos: [{
      id: 1,
      nome: "Produto 1",
      valor: 10.00,
      fotoProduto: "https://picsum.photos/150/100?a=1",
    },
    {
      id: 2,
      nome: "Produto 2",
      valor: 20.00,
      fotoProduto: "https://picsum.photos/150/100?a=2",
    },
    {
      id: 3,
      nome: "Produto 3",
      valor: 30.00,
      fotoProduto: "https://picsum.photos/150/100?a=3",
    },
    {
      id: 4,
      nome: "Produto 4",
      valor: 40.00,
      fotoProduto: "https://picsum.photos/150/100?a=4",
    },
    {
      id: 5,
      nome: "Produto 5",
      valor: 50.00,
      fotoProduto: "https://picsum.photos/150/100?a=5",
    },
    {
      id: 6,
      nome: "Produto 6",
      valor: 60.00,
      fotoProduto: "https://picsum.photos/150/100?a=6",
    },
    {
      id: 7,
      nome: "Produto 7",
      valor: 70.00,
      fotoProduto: "https://picsum.photos/150/100?a=7",
    },
   
    ],
    inputValorMaximo: '',
    inputValorMinimo: '',
    inputNome: '',
  }

  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value});
  }

  onChangeValorMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value});
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value});
  }

  onChangeOrdem = (event) => {
    if (event.target.value === 'crescente') {
      const novaLista = [...this.state.listaDosProdutos].sort((a, b) => {
        if (a.value < b.value) return -1
        if (a.value > b.value) return 1
        return 0
      })
      this.setState({ listaDosProdutos: novaLista })
    } else if (event.target.value === 'decrescente') {
      const novaLista = [...this.state.listaDosProdutos].sort((a, b) => {
        if (a.value > b.value) return -1
        if (a.value < b.value) return 1
        return 0
      })
      this.setState({ listaDosProdutos: novaLista })

    }
  }

  render(){

    let listaFiltrada = this.state.listaDosProdutos;
    if (this.state.inputValorMinimo !== '') {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.valor >= this.state.inputValorMinimo;
      })
    }
    if (this.state.inputValorMaximo !== '') {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.valor <= this.state.inputValorMaximo;
      })
    }
    if (this.state.inputNome !== '') {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.nome.toLowerCase().includes(this.state.inputNome.toLowerCase());
      })
    }

    

    
    
      return <div className="App">

        <div>
          <select onChange={this.onChangeOrdem}>
            <option value={'crescente'} >Valor:  Crescente</option>
            <option value={'decrescente'}>Valor:  Decrescente</option>
          </select>
        </div>
        
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

        <teste>
        <Home listaDosProdutos={listaFiltrada}/>
        </teste>    
        </div>
    
  }
}

export default App;