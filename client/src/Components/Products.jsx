import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { publicRequest } from "../Utils/requestMethods";
import { mobile, special, tablet } from "../Utils/responsive";
import Product from "./Home/Product";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const Products = ({ filters, sort, page }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pages, setPages] = useState(0);
  let content;
  let totalPages;

  const { data: products, isFetching } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await publicRequest.get("/products/");
      // console.log(res.data);
      page &&
        setFilteredProducts(
          res.data.filter((item) =>
            Object.entries(filters).every(([key, value]) => item[key].includes(value))
          )
        );
      return res.data;
    },
  });

  const sortedProducts = () => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0
        )
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  };

  useEffect(() => {
    sortedProducts();
    // eslint-disable-next-line
  }, [sort]);

  useEffect(() => {
    if (filters.category === "") {
      setFilteredProducts(products);
      sortedProducts();
    } else if (Object.keys(filters).length > 0) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item.category.includes(value))
        )
      );
      handleChangeTo1();
      sortedProducts();
    }
    // eslint-disable-next-line
  }, [filters, products]);

  if (isFetching) {
    content = <Loading />;
  } else {
    // setFrom(1);
    totalPages = Math.ceil(filteredProducts.length / 20);
    content = (
      <ProductContainer>
        {page
          ? filteredProducts
              .slice(pages * 20, 20 * (pages + 1))
              .map((item) => <Product item={item} key={item._id} />)
          : products.slice(0, 5).map((item) => <Product item={item} key={item._id} />)}
      </ProductContainer>
    );
  }

  const handlePageChange = (event, page) => {
    if (filteredProducts.length > 20) setPages(page - 1);
  };

  const handleChangeTo1 = () => {
    setPages(0);
  };

  return (
    <Container>
      {page ? <Title>Shop With Us</Title> : <Title>Fresh Arrivals</Title>}
      {content}
      {page && <Pagination variant="outlined" count={totalPages} onChange={handlePageChange} />}
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
