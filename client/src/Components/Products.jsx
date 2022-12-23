// import { useState } from "react";
import styled from "styled-components";
import { products } from "../Data/data";
import { mobile, tablet } from "../responsive";
import Product from "./Home/Product";
// import axios from "axios";

const Products = ({ cat, filters, sort, page }) => {
  // const [products, setProducts] = useState([]);
  //   const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <Container>
      {page ? <Title>Shop With Us</Title> : <Title>Fresh Arrivals</Title>}
      <ProductContainer>
        {page
          ? products.map((item) => <Product item={item} key={item._id} />)
          : products
              .slice(0, 5)
              .map((item) => <Product item={item} key={item._id} />)}
      </ProductContainer>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 25px 0;
  /* background-color: #f5fbfd; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductContainer = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${tablet({
    "grid-template-columns": `repeat(3,1fr)`,
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
