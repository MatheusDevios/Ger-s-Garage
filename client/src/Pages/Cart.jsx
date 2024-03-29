import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import styled from "styled-components";
import { mobile, tablet } from "../Utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Redux/cartRedux";
import { Link, useNavigate } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";
// import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";

const Cart = ({ onCloseCart, onOpenCheckout }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = localStorage.getItem("userId");
  const cart = useSelector((state) => state.cart.items);
  const cartTotalRedux = useSelector((state) => state.cart.totalAmount);
  const shipping = 5.9;
  const discount = 0;
  const subTotal = cartTotalRedux.toFixed(2);
  const TotalPrice = (cartTotalRedux + shipping - discount).toFixed(2);
  const dispatch = useDispatch();

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItemFromCart({ id, user }));
  };
  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1, user: user };
    dispatch(cartActions.addItemToCartHandler(cartItem));
  };

  const handleCheckout = () => {
    if (token !== null) {
      onOpenCheckout();
      onCloseCart();
    } else {
      onCloseCart("checkout");
      navigate("/auth");
    }
  };

  const handleClearCart = () => {
    dispatch(cartActions.removeFromDB(user));
  };
  // const [stripeToken, setStripeToken] = useState(null);

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: cart.total * 100,
  //       });
  //       // console.log(res.data);
  //       history.push("/success", {
  //         stripeData: res.data,
  //         products: cart,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   makeRequest();
  //   // stripeToken && makeRequest();
  // }, [cart.total, history]);
  // }, [stripeToken, cart.total, history]);
  return (
    <Container onClick={onCloseCart}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Title>YOUR BAG</Title>
        <Top>
          <Link onClick={onCloseCart} to="/products">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopButton onClick={handleClearCart} type="filled">
            CLEAR CART
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((product) => (
              <Product key={product.id}>
                <ProductDetail>
                  <Link to={`/product/${product.id}`}>
                    <Image src={product.img} />
                  </Link>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.name}
                    </ProductName>
                    <ProductId>
                      <b>Unit Price:</b> €{product.price.toFixed(2)}
                    </ProductId>
                    <ProductId>
                      <b>Quantity:</b> {product.amount}
                    </ProductId>
                    <ProductId>
                      <b>ID:</b> {product.id}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={cartItemRemoveHandler.bind(null, product.id)} />
                    <ProductAmount>|</ProductAmount>
                    <Add onClick={cartItemAddHandler.bind(null, product)} />
                  </ProductAmountContainer>
                  <ProductPrice>€{(product.price * product.amount).toFixed(2)}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>€{subTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>€{shipping.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>€{discount.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>€{TotalPrice}</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            > */}
            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
            {/* </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 60%;
  max-height: 80%;
  ${tablet({ width: "96%" })}
  ${mobile({ padding: "10px" })}
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  overflow: scroll;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  cursor: pointer;
  width: 200px;
  ${mobile({
    width: "120px",
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
