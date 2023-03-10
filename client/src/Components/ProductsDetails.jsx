import React from "react";
import styled from "styled-components";

const ProductsDetails = (props) => {
  const { name, amount } = props;
  return (
    <Orders>
      <OrderInfo>
        <Info>Item: {name}</Info>
      </OrderInfo>
      <OrderInfo>
        <Info>Amount: {amount}</Info>
      </OrderInfo>
    </Orders>
  );
};

export default ProductsDetails;

const Orders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const OrderInfo = styled.div`
  padding: 0.25rem 2rem;
`;

const Info = styled.p``;
