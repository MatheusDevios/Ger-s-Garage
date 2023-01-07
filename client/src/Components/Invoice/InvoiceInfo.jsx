import React, { useState } from "react";
import styled from "styled-components";
import InvoiceDetails from "./InvoiceDetails";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { userRequest } from "../../Utils/requestMethods";
import Loading from "../Loading";
import AdminInvoiceUpdate from "../Admin/AdminInvoiceUpdate";
import { toast, ToastContainer } from "react-toastify";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const InvoiceInfo = (props) => {
  // console.log(props.invoice);
  const {
    orderId,
    name,
    city,
    country,
    street,
    postalCode,
    products,
    subtotal,
    total,
    date,
    status,
    email,
    phone,
    totalProduct,
    service,
  } = props.invoice;
  const fromAdminPage = props.adminPage;
  const [statusValue, setStatusValue] = useState(status);
  const [productsUpdated, setProductsUpdated] = useState(products);
  const [totalUpdated, setTotalUpdated] = useState(parseFloat(total));
  const [productsPrice, setProductsPrice] = useState(parseFloat(totalProduct));
  const navigate = useNavigate();
  const dateCreated = new Date(date);
  const dateFormated = `${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getFullYear()}`;
  const timeFormated = `${dateCreated.getHours()}:${dateCreated.getMinutes()}`;
  const handleClick = () => {
    navigate(-1);
  };

  const [time, setTime] = useState("");
  const {
    data: slots,
    isFetching,
    // refetch,
  } = useQuery({
    queryKey: ["slotData"],
    queryFn: async () => {
      if (props.invoice.slot) {
        const res = await userRequest.get(`/slots/${props.invoice.slot}`);
        switch (res.data[0].slotTime) {
          case "1":
            setTime("08:30 - 10:30");
            break;
          case "2":
            setTime("10:30 - 12:30");
            break;
          case "3":
            setTime("13:00 - 15:00");
            break;
          case "4":
            setTime("15:30 - 17:30");
            break;

          default:
            break;
        }
        return res.data[0];
      } else {
        return "error";
      }
    },
  });

  const updateProduct = (newProduct) => {
    // e.preventDefault();
    setProductsUpdated([...productsUpdated, newProduct]);
    setTotalUpdated(totalUpdated + newProduct.price);
    setProductsPrice(productsPrice + newProduct.price);
    // refetch();
  };

  const handleStatusUpdate = async (e) => {
    setStatusValue(e.target.value);
    await userRequest.put(`/appointments/status/${orderId}`, {
      service: {
        status: e.target.value,
        _id: service._id,
        name: service.name,
        price: service.price,
        homeIcon: service.homeIcon,
        img: service.img,
        icon: service.icon,
        shortDescription: service.shortDescription,
        description: service.description,
        createdAt: service.createdAt,
        updatedAt: service.updatedAt,
      },
    });
    toast.success("Status updated successfully.");
  };

  const handleDeleteProduct = async (product) => {
    const index = productsUpdated.findIndex((p) => p._id === product._id);
    const updated = productsUpdated.filter((p, indexP) => indexP !== index);
    // console.log(updated);
    setProductsUpdated(updated);
    await userRequest.put(`/appointments/delete/${orderId}`, {
      products: updated,
      totalAmountProducts: productsPrice - product.price,
      totalAppointmentAmount: totalUpdated - product.price,
    });
    setProductsPrice(productsPrice - product.price);
    setTotalUpdated(totalUpdated - product.price);
    toast.success("Status removed an item from the Invoice successfully.");
  };
  return (
    <Container>
      {!isFetching ? (
        <Card>
          <Button onClick={handleClick}>Back</Button>
          <UserDetailsContainer>
            <TopContainer>
              <h3>{name}</h3>
              <StatusConteiner>
                <h3>{statusValue}</h3>
                {fromAdminPage && (
                  <FormControl sx={{ m: 1, minWidth: "150px" }}>
                    <InputLabel id="demo-simple-select-required-label">
                      {statusValue}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={statusValue}
                      label="Status *"
                      onChange={handleStatusUpdate}
                    >
                      <MenuItem value="Booked">Booked</MenuItem>
                      <MenuItem value="In Service">In Service</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Collected">Collected</MenuItem>
                      <MenuItem value="Unrepairable">Unrepairable</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </StatusConteiner>
            </TopContainer>
            <OrderID>
              Reference Number # {orderId || props.invoice.serviceId}
            </OrderID>
            <Time>
              <p>Booked at: </p>
              <p>{dateFormated}</p>
              <p>{timeFormated}</p>
            </Time>
            <UserInfo>Phone: {phone}</UserInfo>
            <UserInfo>Email: {email}</UserInfo>
            {props.invoice.serviceId !== undefined && (
              <div>
                <UserInfo>Type: {props.invoice.type}</UserInfo>
                <UserInfo>Maker: {props.invoice.maker}</UserInfo>
                <UserInfo>License Plate: {props.invoice.license}</UserInfo>
              </div>
            )}
            <Street>{street}</Street>
            {postalCode !== undefined ? (
              <Address>{`${postalCode}. ${city}, ${country}`}</Address>
            ) : (
              <ServiceContainer>
                <ServiceInfo>Service: {props.invoice.service.name}</ServiceInfo>
                <ServiceInfo>Mechanic: {props.invoice.mechanic}</ServiceInfo>
                <ServiceInfo>
                  Appointment day: {slots.slotDate} at: {time}
                </ServiceInfo>
                <ServiceInfo>
                  Customer Comment: "{props.invoice.comments}"
                </ServiceInfo>
              </ServiceContainer>
            )}
            {fromAdminPage && (
              <AdminInvoiceUpdate
                updateProduct={updateProduct}
                updatedProductPrice={productsPrice}
                updatedTotalPrice={totalUpdated}
                info={props.invoice}
              />
            )}
            {productsUpdated.map((order, index) => (
              <InvoiceDetails
                key={index}
                onDelete={handleDeleteProduct}
                productID={order._id}
                name={order.name}
                price={order.price}
                amount={order.amount}
              />
            ))}
            <Price>
              {totalProduct !== undefined ? (
                <div>
                  <PriceInfo>
                    Products Price: {productsPrice.toFixed(2)} €
                  </PriceInfo>
                  <PriceInfo>
                    Service Price:{" "}
                    {parseFloat(props.invoice.service.price).toFixed(2)} €
                  </PriceInfo>
                </div>
              ) : (
                <PriceInfo>SubTotal: {subtotal.toFixed(2)} €</PriceInfo>
              )}
              <PriceInfo>Total: {totalUpdated.toFixed(2)} €</PriceInfo>
            </Price>
          </UserDetailsContainer>
        </Card>
      ) : (
        <Loading />
      )}
      <ToastContainer />
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

const StatusConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  max-width: 100%;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
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

const ServiceContainer = styled.div`
  margin-bottom: 1.3rem;
  font-weight: bold;
  color: #d32929;
  font-size: 1.2rem;
`;

const ServiceInfo = styled.p`
  margin: 0.5rem;
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
  padding-bottom: 1.4rem;
  font-size: 0.9rem;
`;

const UserInfo = styled.div`
  margin-bottom: 0.2rem;
`;

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
  display: flex;
  align-items: end;
  justify-content: end;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
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
`;
