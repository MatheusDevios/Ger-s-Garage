import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 60vh;
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

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.p`
  margin: 25px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "15px" })}
`;

const Button = styled.button`
  padding: 10px;
  color: azure;
  font-size: 20px;
  background-color: #c30c0c;
  border-radius: 3rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  ${mobile({ fontSize: "15px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideSize = sliderItems.length - 1;
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideSize);
    } else {
      setSlideIndex(slideIndex < slideSize ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer image={item.img}>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>{item.button}</Button>
              </InfoContainer>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
