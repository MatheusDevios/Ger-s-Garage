import LOGO from "../assets/speed.png";
import styled from "styled-components";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage fetchpriority="high" src={LOGO} alt="Barber Logo" />
      <SyncLoader className="load" color={"#ffffff"} loading={true} size={15} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const LoadingImage = styled.img`
  width: 20rem;
`;

export default Loading;
