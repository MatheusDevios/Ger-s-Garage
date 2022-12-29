import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import LOGO from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { mobile } from "../Utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Redux/authRedux";
import { cartActions } from "../Redux/cartRedux";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const cartItemsRedux = useSelector((state) => state.cart.items);
  const numberOfItems = cartItemsRedux.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCartHandler());
    navigate("/");
    window.location.reload(false);
  };

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
            {!isLogged ? (
              <Link to="/auth" style={{ textDecoration: "none" }}>
                <MyAccountIcon> Sign Up / Sign In</MyAccountIcon>
              </Link>
            ) : (
              <Link
                onClick={logoutHandler}
                to="/auth"
                style={{ textDecoration: "none" }}
              >
                <MyAccountIcon>Logout</MyAccountIcon>
              </Link>
            )}
            <Link
              to={isAdmin ? "/admin" : "/user"}
              style={{ textDecoration: "none" }}
            >
              <MyAccountIcon>My Account</MyAccountIcon>
            </Link>
          </ContainerTopInner>
        </Container>
      </ContainerTop>
      <ContainerMid>
        <Container>
          <MainBarContainer>
            <Link to="/">
              <MainBarContainerLogo src={LOGO} />
            </Link>
            <Nav>
              <Link to="/" style={{ textDecoration: "none" }}>
                <PageLink>Home</PageLink>
              </Link>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <PageLink>Services</PageLink>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <PageLink>Shop</PageLink>
              </Link>
            </Nav>
            <CartContainer>
              <Link style={{ textDecoration: "none" }} to={`/cart`}>
                <Badge badgeContent={numberOfItems} color="error">
                  <ShoppingCartIcon style={{ color: "#18181d" }} />
                </Badge>
              </Link>
            </CartContainer>
          </MainBarContainer>
        </Container>
      </ContainerMid>
    </ContainerGeral>
  );
};

export default NavBar;

const ContainerGeral = styled.div`
  font-size: 18px;
  font-weight: 700;
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
  font-size: 17px;
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
  color: #fff;
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

const MainBarContainerLogo = styled.img`
  width: 100px;
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
  ${mobile({
    margin: "10px",
  })}
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
