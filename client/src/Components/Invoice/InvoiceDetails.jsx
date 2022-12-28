import React from "react";
import styled from "styled-components";

const InvoiceDetails = (props) => {
  const { name, price, amount } = props;
  return (
    <Orders>
      <OrderInfo>
        <Info>Item: {name}</Info>
      </OrderInfo>
      <OrderInfo>
        <Info>Price: {price}</Info>
      </OrderInfo>
      <OrderInfo>
        <Info>Amount: {amount}</Info>
      </OrderInfo>
    </Orders>
  );
};

export default InvoiceDetails;

const Orders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const OrderInfo = styled.div`
  padding: 0.25rem 2rem;
`;

const Info = styled.p``;
