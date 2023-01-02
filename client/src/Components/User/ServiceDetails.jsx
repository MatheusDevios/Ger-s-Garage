import React from "react";
import UserOrders from "./UserOrders";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ServiceDetails = (props) => {
  const { serviceId, service, products } = props;
  return (
    <UserDetailsContainer>
      <TopContainer>
        <h3>{service.status}</h3>
        <h3> SERVICE INFO</h3>
        <Link to={`/invoice/${serviceId}`} state={{ from: props }}>
          <Button>Invoice</Button>
        </Link>
      </TopContainer>
      <OrderID>Appointment # {serviceId}</OrderID>
      <ServiceContainer>Service: {service.name}</ServiceContainer>
      {products.lenght > 0 &&
        products.map((order, index) => (
          <UserOrders key={index} name={order.name} amount={order.amount} />
        ))}
    </UserDetailsContainer>
  );
};

export default ServiceDetails;

const UserDetailsContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  & h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.4rem;
  }
`;

const ServiceContainer = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
  color: #d32929;
  font-size: 1.2rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: black;
  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const OrderID = styled.div`
  color: rgb(163, 153, 153);
  font-weight: 600;
  padding-bottom: 10px;
  font-size: 0.9rem;
`;
