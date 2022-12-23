import React from "react";
import styled from "styled-components";
import { banner } from "../../Data/data";
import { mobile } from "../../responsive";

const Banner = () => {
  return (
    <Container>
      <Wrapper slideIndex={0}>
        <Slide bg={banner[0].bg} key={banner[0].id}>
          <ImgContainer image={banner[0].img}>
            <InfoContainer>
              {/* <Title>{banner[0].title}</Title> */}
              <Desc>{banner[0].desc}</Desc>
            </InfoContainer>
          </ImgContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  min-height: 24vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
`;

const InfoContainer = styled.div`
  padding: 20px 150px;
  color: whitesmoke;
  justify-content: left;
  align-items: left;
  max-width: 800px;
  position: relative;
  ${mobile({ padding: "0 0 0 15px" })}
`;

const Desc = styled.p`
  /* color: black; */
  margin: 25px 0px;
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "25px" })}
`;
