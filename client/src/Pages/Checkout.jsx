import React from "react";
import CheckoutForm from "../Components/Checkout/CheckoutForm";
import styled from "styled-components";

const Checkout = ({ onClose }) => {
  return (
    <Container onClick={onClose}>
      <CheckoutForm onClick={(e) => e.stopPropagation()} onClose={onClose} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export default Checkout;
