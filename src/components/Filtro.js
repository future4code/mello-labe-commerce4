import React from 'react';
import styled from 'styled-components';



const FormContainer = styled.div`
margin-bottom: 10px;
width:100%;
padding: 5px;
`

const StylePalavraFiltro = styled.h3`
text-align: center;
`


class Filtro extends React.Component {
  render(){
    return (
      <div>
        <StylePalavraFiltro>Filtros</StylePalavraFiltro>
        <FormContainer>
          <label>Valor Mínimo: </label>
          <input type='number' value={this.props.valorMinimo} onChange={this.props.onChangeValorMinimo} placeholder={'Informe o valor'} />
        </FormContainer>
        <FormContainer>
          <label>Valor Máximo: </label>
          <input type='number' value={this.props.valorMaximo} onChange={this.props.onChangeValorMaximo} placeholder={'Informe o valor'} />
        </FormContainer>
        <FormContainer>
          <label>Buscar Produto: </label>
          <input type='text' value={this.props.nome} onChange={this.props.onChangeNome} placeholder={'Informe o produto'} />
        </FormContainer>
      </div>
    );
  }
}
export default Filtro;