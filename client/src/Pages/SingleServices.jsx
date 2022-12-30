import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { mobile, tablet } from "../Utils/responsive";
import { useLocation } from "react-router-dom";
import Banner from "../Components/SingleProduct/Banner";
import Appointment from "../Components/Appointment/Appointment";

const SingleServices = () => {
  const location = useLocation();
  const { service } = location.state;
  // const id = location.pathname.split("/")[2];
  const { img, name, description, price } = service;

  return (
    <Container>
      <NavBar />
      <Banner />
      <Wrapper>
        <ImgContainer>
          <Image src={img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{name}</Title>
          <Desc>{description}</Desc>
          <Price>From {price} €</Price>
          <AddContainer>
            <Appointment service={service} />
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SingleServices;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  ${tablet({ width: "100%" })}
  ${mobile({ height: "40vh", width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  ${mobile({ width: "100%" })}
`;
