import { Link } from "react-router-dom";
import styled from "styled-components";

const Service = ({ service }) => {
  return (
    <Wrapper>
      <Link
        style={{ textDecoration: "none" }}
        to={`/service/${service._id}`}
        state={{ service: service }}
      >
        <ContainerList>
          <ContainerImg>
            <Image src={service.img} />
          </ContainerImg>
          <Info>
            <ServiceText>{service.shortDescription}</ServiceText>
            <ContainerServiceImage>
              <ServiceImage src={service.icon} />
            </ContainerServiceImage>
            <ServiceName>{service.name}</ServiceName>
          </Info>
        </ContainerList>
      </Link>
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.div`
  position: relative;
`;

const ContainerList = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  border-radius: 1rem;
  height: 320px;
  border-radius: 2rem;
  overflow: hidden;
`;

const ContainerImg = styled.div`
  overflow: hidden;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100% !important;
  min-height: 300px;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  transform: scale(1.01, 1.01);
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 40px 50px;
  color: #ffffff;
  background-color: #000000;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0.8;
    border-radius: 2rem;
  }
`;

const ServiceName = styled.div`
  padding-top: 10px;
  width: 90px;
  border-radius: 50%;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const ServiceText = styled.div`
  max-width: 385px;
  margin-bottom: auto;
  max-height: 8rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ContainerServiceImage = styled.div`
  height: 30px;
  max-width: 100%;
  margin-top: 1rem;
  position: relative;
`;

const ServiceImage = styled.img`
  height: 30px;
`;
