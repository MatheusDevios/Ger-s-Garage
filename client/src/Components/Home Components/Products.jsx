// import { useState } from "react";
import styled from "styled-components";
import { products, categories } from "../../data";
import { mobile, tablet } from "../../responsive";
import Product from "./Product";
// import axios from "axios";

const Container = styled.div`
  padding: 25px 0;
  background-color: #f5fbfd;
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

const Products = ({ cat, filters, sort }) => {
  // const [products, setProducts] = useState([]);
  //   const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <Container>
      <Title>Fresh Arrivals</Title>
      <ProductContainer>
        {categories
          ? products.map((item) => <Product item={item} key={item._id} />)
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </ProductContainer>
    </Container>
  );
};

export default Products;
