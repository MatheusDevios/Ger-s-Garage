import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";

const ContainerGeral = styled.div`
  font-size: 14px;
  font-weight: 500;
  /* border-bottom: 1px solid #f0f2f3; */
`;
const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ width: "95%" })}
`;
const ContainerTop = styled.div`
  height: 30px;
  background-color: #c30c0c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const ContainerTopInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icons = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const MyAccountIcon = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
const ContainerMid = styled.div`
  padding: 5px 0;
`;
const MainBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const MainBarContainerLogo = styled.div`
  display: inline-block;
  padding: 10px 0;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;
const Nav = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PageLink = styled.div`
  cursor: pointer;
  position: relative;
  margin: 20px;
  color: #18181d;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
  cursor: pointer;
`;
const CartContainer = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
  cursor: pointer;
`;

const NavBar = () => {
  const quantity = 4;
  return (
    <ContainerGeral>
      <ContainerTop>
        <Container>
          <ContainerTopInner>
            <Icons>
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Icons>
            <MyAccountIcon>Sign Up / Sign In</MyAccountIcon>
            <MyAccountIcon>My Account</MyAccountIcon>
          </ContainerTopInner>
        </Container>
      </ContainerTop>
      <ContainerMid>
        <Container>
          <MainBarContainer>
            <MainBarContainerLogo>LOGO</MainBarContainerLogo>
            <Nav>
              <Link style={{ textDecoration: "none" }}>
                <PageLink>Home</PageLink>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <PageLink>Services</PageLink>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <PageLink>Shop</PageLink>
              </Link>
            </Nav>
            <CartContainer>
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartIcon />
              </Badge>
            </CartContainer>
          </MainBarContainer>
        </Container>
      </ContainerMid>
    </ContainerGeral>
  );
};

export default NavBar;
