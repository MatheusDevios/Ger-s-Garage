import React from "react";
import UserOrders from "./UserOrders";
import styled from "styled-components";

const UserDetails = (props) => {
  const { name, city, country, street, postalCode, items, subtotal, total } =
    props;
  return (
    <UserDetailsContainer>
      <h3>{name}</h3>
      <Street>{street}</Street>
      <Address>{postalCode}</Address>
      <Address>{city}</Address>
      <Address>{country}</Address>
      {items.map((order, index) => (
        <UserOrders
          key={index}
          name={order.name}
          price={order.price}
          amount={order.amount}
        />
      ))}
      <Price>
        <PriceInfo>SubTotal: {subtotal} €</PriceInfo>
        <PriceInfo>Total: {total} €</PriceInfo>
      </Price>
    </UserDetailsContainer>
  );
};

export default UserDetails;

const UserDetailsContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  & h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.4rem;
  }
`;

const Street = styled.div`
  margin-top: 0.4rem;
  font-weight: bold;
  color: #d32929;
  font-size: 1.2rem;
`;

const Address = styled.div`
  color: #d32929;
  font-weight: bold;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d32929;
  font-weight: bold;
  margin-top: 0.4rem;
`;

const PriceInfo = styled.div`
  margin-bottom: 0.2rem;
`;
