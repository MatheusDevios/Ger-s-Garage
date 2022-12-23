import styled from "styled-components";
import { banner } from "../../Data/data";
import { special } from "../../responsive";

const Component404 = () => {
  return (
    <Back404>
      <NotFound image={banner[0].img}>
        <ContNotFoundInfos>
          <TitleNotFound>Ops...</TitleNotFound>
          <br />
          <TextNotFound>Page NOT Found</TextNotFound>
        </ContNotFoundInfos>
      </NotFound>
      <Cont404>
        <Infos404>
          <ErrorTitle>Error 404</ErrorTitle>
          <ErrorText>
            We could not find this page. Please check the url or go back to the
            last page.{" "}
          </ErrorText>
        </Infos404>
      </Cont404>
    </Back404>
  );
};

export default Component404;

const Back404 = styled.div``;

const NotFound = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContNotFoundInfos = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  padding-top: 100px;
  padding-bottom: 260px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${special({
    paddingTop: 0,
    paddingBottom: 0,
  })}
`;

const TitleNotFound = styled.h1`
  color: #fff;
  font-size: 90px !important;
  line-height: 60px;
  font-weight: 300;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

const TextNotFound = styled.span`
  color: #fff;
  font-size: 90px;
`;

const Cont404 = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

const Infos404 = styled.div`
  max-width: 100%;
  margin: 50px 30px 150px;
  float: none;
  clear: none;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: black;
  font-size: 90px;
  line-height: 70px;
  font-weight: 400;
`;

const ErrorText = styled.p`
  color: black;
  margin-top: 30px;
  font-weight: 300;
  margin-bottom: 10px;
`;
