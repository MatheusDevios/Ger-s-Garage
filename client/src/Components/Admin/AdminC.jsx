import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { userRequest } from "../../Utils/requestMethods";
import ServiceDetails from "./ServiceDetails";
import Loading from "../Loading";

const AdminC = () => {
  let contentService;
  const userId = localStorage.getItem("userId");

  const { data: serviceInfo, isFetching: serviceIsFetching } = useQuery({
    queryKey: ["serviceInfo"],
    queryFn: async () => {
      const res = await userRequest.get(`appointments/${userId}`);
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

  return (
    <Card>
      <ul>{contentService}</ul>
    </Card>
  );
};

export default AdminC;

const Card = styled.div`
  flex: 1;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 60rem;
  width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;
