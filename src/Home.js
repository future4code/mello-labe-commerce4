import React from 'react';
import styled from 'styled-components';



export class Home extends React.Component {


    render(){

      const novaListaDosProdutos = this.props.listaDosProdutos.map((produto) => {
  
        return <div>
          <img src={produto.fotoProduto}/>
          <p>{produto.nome}</p>
          <p>Valor: R$ {produto.valor}</p>
          <button>comprar</button> 
        </div>    
      })
      return <div> {novaListaDosProdutos} </div>
  }
}
export default Home

