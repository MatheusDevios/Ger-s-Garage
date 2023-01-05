import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { publicRequest } from "../Utils/requestMethods";
import { mobile, special, tablet } from "../Utils/responsive";
import Product from "./Home/Product";
import Loading from "./Loading";
import { ToastContainer } from "react-toastify";

const Products = ({ cat, filters, sort, page }) => {
  //   const [filteredProducts, setFilteredProducts] = useState([]);
  let content;

  const { data: products, isFetching } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await publicRequest.get("/products/");
      // console.log(res.data);
      return res.data;
    },
  });

  if (isFetching) {
    content = <Loading />;
  } else {
    content = (
      <ProductContainer>
        {page
          ? products.map((item) => <Product item={item} key={item._id} />)
          : products
              .slice(0, 5)
              .map((item) => <Product item={item} key={item._id} />)}
      </ProductContainer>
    );
  }

  return (
    <Container>
      {page ? <Title>Shop With Us</Title> : <Title>Fresh Arrivals</Title>}
      {content}
      <ToastContainer />
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductContainer = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${special({
    "grid-template-columns": `repeat(3,1fr)`,
  })}
  ${tablet({
    "grid-template-columns": `repeat(2,1fr)`,
  })}
  ${mobile({
    "grid-template-columns": `1fr`,
  })}
`;

const Title = styled.h3`
  font-size: 38px;
  line-height: 1.4;
  font-weight: 800;
`;
