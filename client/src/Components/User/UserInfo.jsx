import Loading from "../Loading";
import UserDetails from "./UserDetails";
import { useQuery } from "@tanstack/react-query";
import { userRequest } from "../../requestMethods";
import styled, { keyframes } from "styled-components";

const UserInfo = () => {
  const userId = localStorage.getItem("userId");
  let content;
  let loadedData = [];

  const { data: userInfo, isFetching: userIsFetching } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`users/find/${userId}`);
      // console.log(res.data);
      return res.data;
    },
  });
  const { data: orderInfo, isFetching: orderIsFetching } = useQuery({
    queryKey: ["orderInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`orders/find/${userId}`);
      // console.log(res.data);
      return res.data;
    },
  });

  for (const keyData in orderInfo) {
    loadedData.push({
      orderId: orderInfo[keyData]._id,
      name: userInfo.firstname + " " + userInfo.surname,
      email: userInfo.email,
      phone: userInfo.phone,
      address: orderInfo[keyData].address,
      products: orderInfo[keyData].products,
      subtotal: orderInfo[keyData].subtotal,
      total: orderInfo[keyData].total,
      status: orderInfo[keyData].status,
      date: orderInfo[keyData].createdAt,
    });
  }

  // console.log(loadedData);
  if (orderIsFetching || userIsFetching) {
    content = <Loading />;
  } else {
    content = (
      <>
        {loadedData.map((item, index) => (
          <UserDetails
            key={item.orderId}
            orderId={item.orderId}
            name={item.name}
            email={item.email}
            phone={item.phone}
            city={item.address.county}
            country={item.address.country}
            street={item.address.street}
            postalCode={item.address.postalCode}
            items={item.products}
            subtotal={item.subtotal}
            total={item.total}
            date={item.date}
            status={item.status}
          />
        ))}
      </>
    );
  }
  return (
    <UserInfoContainer>
      <Title>Orders</Title>
      <Card>
        <ul>{content}</ul>
      </Card>
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
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
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
