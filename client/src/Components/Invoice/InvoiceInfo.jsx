import React from "react";
import styled from "styled-components";
import InvoiceDetails from "./InvoiceDetails";

const InvoiceInfo = (props) => {
  const {
    orderId,
    name,
    city,
    country,
    street,
    postalCode,
    items,
    subtotal,
    total,
    date,
    status,
    email,
    phone,
  } = props.invoice;

  const dateCreated = new Date(date);
  const dateFormated = `${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getFullYear()}`;
  const timeFormated = `${dateCreated.getHours()}:${dateCreated.getMinutes()}`;
  // const timeCreated;
  return (
    <Container>
      <Card>
        <UserDetailsContainer>
          <TopContainer>
            <h3>{name}</h3>
            <h3>{status}</h3>
          </TopContainer>
          <OrderID>Order # {orderId}</OrderID>
          <Time>
            <p>Ordered at: </p>
            <p>{dateFormated}</p>
            <p>{timeFormated}</p>
          </Time>
          <UserInfo>Email: {email}</UserInfo>
          <UserInfo>Phone: {phone}</UserInfo>
          <Street>{street}</Street>
          <Address>{`${postalCode}. ${city}, ${country}`}</Address>
          {items.map((order, index) => (
            <InvoiceDetails
              key={index}
              name={order.name}
              price={order.price}
              amount={order.amount}
            />
          ))}
          <Price>
            <PriceInfo>SubTotal: {subtotal.toFixed(2)} €</PriceInfo>
            <PriceInfo>Total: {total.toFixed(2)} €</PriceInfo>
          </Price>
        </UserDetailsContainer>
      </Card>
    </Container>
  );
};

export default InvoiceInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
`;

const Card = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  margin: 2rem 0;
`;

const UserDetailsContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  & h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.4rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderID = styled.div`
  color: rgb(163, 153, 153);
  font-weight: 600;
  font-size: 0.9rem;
`;

const Time = styled.div`
  display: flex;
  gap: 1rem;
  color: rgb(163, 153, 153);
  font-weight: 600;
  padding-bottom: 10px;
  font-size: 0.9rem;
`;

const UserInfo = styled.div``;

const Street = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
  color: #d32929;
  font-size: 1.2rem;
`;

const Address = styled.div`
  color: #d32929;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  color: #d32929;
  font-weight: bold;
  margin-top: 2rem;
  margin-right: 2rem;
`;

const PriceInfo = styled.div`
  margin-bottom: 0.2rem;
`;
