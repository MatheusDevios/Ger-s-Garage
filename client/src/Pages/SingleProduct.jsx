import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { mobile, tablet } from "../Utils/responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Banner from "../Components/SingleProduct/Banner";
import { publicRequest } from "../Utils/requestMethods";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/cartRedux";
import { useQuery } from "@tanstack/react-query";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  let content;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data: product, isFetching } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await publicRequest.get(`/products/find/${id}`);
      // console.log(res.data);
      return res.data;
    },
  });
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCartHandler({
        id: product._id,
        name: product.name,
        amount: quantity,
        price: product.price,
        img: product.img,
      })
    );
  };

  if (isFetching) {
    content = <div>Fetching data, please wait...</div>;
  } else {
    content = (
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>{product.price} €</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={addToCartHandler}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    );
  }

  return (
    <Container>
      <NavBar />
      <Banner />
      {content}
      <Footer />
    </Container>
  );
};

export default SingleProduct;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  ${tablet({ width: "100%" })}
  ${mobile({ height: "40vh", width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #fff;
  }
`;
