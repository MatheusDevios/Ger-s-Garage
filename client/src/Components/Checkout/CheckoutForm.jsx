import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { mobile, tablet } from "../../Utils/responsive";
import { userRequest } from "../../Utils/requestMethods";
import { cartActions } from "../../Redux/cartRedux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.userId);
  const cartTotalRedux = useSelector((state) => state.cart.totalAmount);
  const subTotal = cartTotalRedux.toFixed(2);
  const shipping = 5.9;
  const discount = 0;
  const totalPrice = (cartTotalRedux + shipping - discount).toFixed(2);

  const submitOrder = async (address) => {
    await userRequest.post(`/orders/${userId}`, {
      userId: userId,
      products: cart,
      subtotal: parseInt(subTotal),
      total: parseInt(totalPrice),
      address: address,
    });
    dispatch(cartActions.clearCartHandler({ items: [], totalAmount: 0 }));
    toast.success("Order done successfully!");
    setTimeout(function () {
      navigate("/");
    }, 2000);
  };
  return (
    <Container>
      <Wrapper>
        <Form>
          <Checkout onConfirm={submitOrder} />
        </Form>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>{subTotal} €</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>{shipping.toFixed(2)} €</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>{discount.toFixed(2)} €</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>{totalPrice} €</SummaryItemPrice>
          </SummaryItem>
        </Summary>
        <ToastContainer
          newestOnTop={true}
          autoClose={2000}
          pauseOnHover
          theme="dark"
        />
      </Wrapper>
    </Container>
  );
};

export default CheckoutForm;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
  ${tablet({})}
  ${mobile({ padding: "10px", flexDirection: "column-reverse" })}
`;

const Form = styled.div`
  flex: 2;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
