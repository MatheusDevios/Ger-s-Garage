import styled from "styled-components";
import Service from "./Service";
import { mobile, tablet } from "../../responsive";
import { useQuery } from "@tanstack/react-query";
import { publicRequest } from "../../requestMethods";
import Loading from "../Loading";

const ServicesList = () => {
  let content;
  const { data: services, isFetching } = useQuery({
    queryKey: ["servicesData"],
    queryFn: async () => {
      const res = await publicRequest.get("/services/");
      // console.log(res.data);
      return res.data;
    },
  });

  if (isFetching) {
    content = <Loading />;
  } else {
    content = (
      <ProductContainer>
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
        ;
      </ProductContainer>
    );
  }

  return (
    <Container>
      <Title>Services</Title>
      {content}
    </Container>
  );
};

export default ServicesList;

const Container = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductContainer = styled.div`
  padding: 20px 0;
  display: grid;
  width: 75vw;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  ${tablet({
    "grid-template-columns": `1fr`,
    width: "85%",
  })}
  ${mobile({
    width: "95%",
    gap: "1rem",
  })}
`;

const Title = styled.h3`
  font-size: 38px;
  line-height: 1.4;
  font-weight: 800;
`;
