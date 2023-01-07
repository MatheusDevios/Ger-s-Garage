import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled, { keyframes } from "styled-components";
import { userRequest } from "../../Utils/requestMethods";
import ServiceDetails from "./ServiceDetails";
import Loading from "../Loading";
import { mobile } from "../../Utils/responsive";

const AdminC = () => {
  let contentService;
  let contentSlot;
  let date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let newDate = `${day}/${month}/${year}`;
  const userId = localStorage.getItem("userId");

  const { data: serviceInfo, isFetching: serviceIsFetching } = useQuery({
    queryKey: ["serviceInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`appointments/${userId}`);
      // console.log(res.data);
      return res.data;
    },
  });
  const { data: slotInfo, isFetching: slotIsFetching } = useQuery({
    queryKey: ["slotsInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`slots/`);
      // console.log(res.data);

      return res.data;
    },
  });

  if (serviceIsFetching) {
    contentService = <Loading />;
  } else {
    contentService = (
      <>
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

  if (slotIsFetching) {
    contentSlot = <Loading />;
  } else {
    contentSlot = (
      <>
        {slotInfo.map(
          (item, index) =>
            item.slotDate === newDate && (
              <TimeContainer key={index}>
                {item.mechanic === "1" && <p>Mechanic: Michael</p>}
                {item.mechanic === "2" && <p>Mechanic: Jordan</p>}
                {item.mechanic === "3" && <p>Mechanic: Tim</p>}
                {item.mechanic === "4" && <p>Mechanic: Wilson</p>}
                {item.slotTime === "1" && <p>At: 8:30 - 10:30</p>}
                {item.slotTime === "2" && <p>At: 10:30 - 12:30</p>}
                {item.slotTime === "3" && <p>At: 13:00 - 15:00</p>}
                {item.slotTime === "4" && <p>At: 15:30 - 17:30</p>}
                <br />
              </TimeContainer>
            )
        )}
      </>
    );
  }

  return (
    <AdminInfoContainer>
      <Title>Day Schedule / Services</Title>
      <Conteiner>
        <ContainerSchedule>
          <CardSchedule>
            <Time>Date: {newDate}</Time>
            <ul>{contentSlot}</ul>
          </CardSchedule>
        </ContainerSchedule>
        <ContainerService>
          <Card>
            <ul>{contentService}</ul>
          </Card>
        </ContainerService>
      </Conteiner>
    </AdminInfoContainer>
  );
};

export default AdminC;

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

const AdminInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  width: 95%;
  margin: 2rem auto;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  animation: ${usersApear} 1s ease-out forwards;
`;

const Conteiner = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
    gap: "1rem",
  })}
`;
const ContainerSchedule = styled.div`
  flex: 1;
`;
const ContainerService = styled.div`
  flex: 2;
`;

const Card = styled.div`
  padding: 1rem;
  margin: auto;
  max-width: 60rem;
  width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;
const CardSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: auto;
  max-width: 60rem;
  width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;

const Title = styled.h3`
  padding-bottom: 1rem;
  font-size: 38px;
  line-height: 1.4;
  font-weight: 800;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-weight: 600;
  padding-top: 0.9rem;
  font-size: 1rem;
`;
const Time = styled.div`
  color: black;
  font-weight: 900;
  padding-bottom: 1.4rem;
  font-size: 1.4rem;
`;
