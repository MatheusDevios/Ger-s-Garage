import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { mobile } from "../../Utils/responsive";

const InvoiceDetails = (props) => {
  const { name, price, amount, productID, fromAdminPage } = props;

  const handleDelete = () => {
    props.onDelete({ _id: productID, price });
    // console.log(props);
  };
  return (
    <Orders>
      <OrderInfo>
        <Info>Item: {name}</Info>
      </OrderInfo>
      <OrderInfo>
        <Info>Amount: {amount}</Info>
      </OrderInfo>
      <OrderInfo>
        <Info>Price: {price}</Info>
      </OrderInfo>
      {fromAdminPage && (
        <Button onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      )}
    </Orders>
  );
};

export default InvoiceDetails;

const Orders = styled.div`
  display: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  ${mobile({
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "3rem",
  })}
`;

const OrderInfo = styled.div`
  padding: 0.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Info = styled.p``;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 8px 12px;
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
  ${mobile({
    width: "100%",
  })}
`;
