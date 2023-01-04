import Loading from "../Loading";
import ServiceDetails from "./ServiceDetails";
import { useQuery } from "@tanstack/react-query";
import { userRequest } from "../../Utils/requestMethods";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { mobile } from "../../Utils/responsive";
import OrderDetails from "./OrderDetails";

const UserInfo = () => {
  const userId = localStorage.getItem("userId");
  const name = useSelector((state) => state.auth.name);
  const phone = useSelector((state) => state.auth.phone);
  const email = useSelector((state) => state.auth.email);
  let contentOrder;
  let contentService;

  const { data: orderInfo, isFetching: orderIsFetching } = useQuery({
    queryKey: ["orderInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`orders/find/${userId}`);
      // console.log(res.data);
      return res.data;
    },
  });

  const { data: serviceInfo, isFetching: serviceIsFetching } = useQuery({
    queryKey: ["serviceInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`appointments/all/${userId}`);
      // console.log(res.data);
      return res.data;
    },
  });

  // console.log(loadedData);

  if (orderIsFetching || serviceIsFetching) {
    contentOrder = <Loading />;
  } else {
    contentOrder = (
      <>
        {orderInfo.map((item, index) => (
          <OrderDetails
            key={item._id}
            orderId={item._id}
            name={name}
            email={email}
            phone={phone}
            city={item.address.city}
            country={item.address.country}
            street={item.address.street}
            postalCode={item.address.postalCode}
            products={item.products}
            subtotal={item.subtotal}
            total={item.total}
            date={item.createdAt}
            status={item.status}
          />
        ))}
      </>
    );
    contentService = (
      <>
        {/* USE THE CODE BELLOW BEFORE THE SERVICE 
        DETAILS TO ONLY DISPLAY THE SERBIVES FIXED, COMPLETED AND UNREPAIRABLE  */}
        {/* (item.service.status !== "Booked") &
              (item.service.status !== "In Service") &&  */}
        {serviceInfo.map((item, index) => (
          <ServiceDetails
            key={item._id}
            serviceId={item._id}
            status={item.service.status}
            name={item.name}
            email={item.email}
            phone={item.phone}
            type={item.type}
            maker={item.maker}
            license={item.license}
            mechanic={item.mechanic}
            comments={item.comments}
            totalProduct={item.totalAmountProducts}
            total={item.totalAppointmentAmount}
            orderId={item._id}
            service={item.service}
            products={item.products}
            date={item.createdAt}
            slot={item.slots}
          />
        ))}
      </>
    );
  }
  return (
    <UserInfoContainer>
      <Title>Services / Orders</Title>
      <InnerContaienr>
        <Card>
          <ul>{contentService}</ul>
        </Card>
        <Card>
          <ul>{contentOrder}</ul>
        </Card>
      </InnerContaienr>
    </UserInfoContainer>
  );
};

export default UserInfo;

const usersApear = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  flex: 1;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;
const InnerContaienr = styled.div`
  display: flex;
  gap: 1rem;
  ${mobile({
    flexDirection: "column",
  })}
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  animation: ${usersApear} 1s ease-out forwards;
`;

const Title = styled.h3`
  padding-bottom: 1rem;
  font-size: 38px;
  line-height: 1.4;
  font-weight: 800;
`;
