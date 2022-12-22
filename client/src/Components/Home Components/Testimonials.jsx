import React from "react";
import { data } from "../../data";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header5 = styled.h5`
  margin-bottom: 10px;
  color: #c30c0c;
`;
const TestimonialsTitle = styled.h2`
  font-size: 30px;
  line-height: 1.4;
  font-weight: 800;
  margin: 10px;
`;

const SwiperContainer = styled.div`
  width: 50%;
  padding: 2rem;
  ${tablet({ width: "60%" })}
  ${mobile({ width: "80%" })}
`;

const SwiperSlideContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
  user-select: none;
  background: rgb(245, 251, 253);
  border-radius: 2rem;
  border: 1px solid transparent;

  &:hover {
    border-color: black;
    background: transparent;
    transition: all ease 0.6s;
  }
`;

const ClientAvatar = styled.img`
  width: 5rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 2px solid gray;
`;

const ClientReview = styled.small`
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
  text-align: justify;
`;

const Testimonials = () => {
  return (
    <Container>
      <Header5>Review from clients</Header5>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>

      <SwiperContainer>
        <Swiper
          // Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {data.map(({ image, name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperSlideContainer>
                  <ClientAvatar src={image} alt={name} />
                  <Header5 style={{ color: "black" }}>{name}</Header5>
                  <ClientReview>{review}</ClientReview>
                </SwiperSlideContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default Testimonials;
