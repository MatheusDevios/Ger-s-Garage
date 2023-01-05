import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cartActions } from "../../Redux/cartRedux";
import { mobile } from "../../Utils/responsive";
import { toast } from "react-toastify";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCartHandler({
        id: item._id,
        name: item.name,
        amount: 1,
        price: item.price,
        img: item.img,
      })
    );
    toast.success("Product added to cart");
  };

  return (
    <Wrapper>
      <ContainerList>
        <Container>
          <Link style={{ textDecoration: "none" }} to={`/product/${item._id}`}>
            <Image src={item.img} />
          </Link>
          <Info>
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/${item._id}`}
            >
              <NameInfo>{item.name}</NameInfo>
            </Link>
            <PriceContianer>
              <PriceInfo>{item.price}</PriceInfo>
              <Link
                style={{ textDecoration: "none" }}
                onClick={addToCartHandler}
              >
                <Icon>
                  <ShoppingCartOutlined />
                </Icon>
              </Link>
            </PriceContianer>
          </Info>
        </Container>
      </ContainerList>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerList = styled.div`
  height: 100%;
  min-height: 1px;
  padding: 0.5rem;
`;

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 420px;
  padding: 20px;
  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #f0f2f3;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

  ${mobile({
    maxWidth: 300,
  })}
`;

const Info = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const NameInfo = styled.div`
  color: #18181d;
  cursor: pointer;
  padding-bottom: 5px;
  width: 90%;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const PriceContianer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  color: #18181d;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.23);
  }
  cursor: pointer;
`;

const PriceInfo = styled.p`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
