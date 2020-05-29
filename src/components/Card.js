import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 5px;
  border: 1px dashed #ffa500;
`;

const Img = styled.img`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  background: #000;
  color: #fff;
  border: unset;

  &:hover {
    background: #ffa500;
  }
`;

export const Card = (props) => {
  return (
    <CardContainer>
      <Img src={props.imageUrlProps} alt={props.descriptionProps} />
      <p>{props.nameProps}</p>
      <p>R${props.valueProps}</p>
      <Button>Adicionar ao Carrinho</Button>
    </CardContainer>
  );
};
