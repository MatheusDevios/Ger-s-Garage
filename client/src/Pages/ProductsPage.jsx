import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Products from "../Components/Products";
import styled from "styled-components";
import { mobile } from "../Utils/responsive";
// import { useLocation } from "react-router";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "@tanstack/react-query";
import { publicRequest } from "../Utils/requestMethods";
import { Link } from "react-router-dom";

const Page = styled.div`
  position: relative;
`;

const Container = styled.div`
  z-index: 1;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ width: "99%" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-size: smaller;
  ${mobile({ margin: "10px 0px" })}
`;

const FilterSearch = styled.div`
  background-color: #fff;
  padding-left: 10px;
  align-items: center;
  margin: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: auto;
  height: 45px;
  border-radius: 2rem;
  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);
  border: 1px solid #f0f2f3;
  ${mobile({ width: "auto" })}
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  font-size: medium;
`;

const SearchContainer = styled.div`
  position: absolute;
  max-height: 240px;
  overflow: hidden;
  overflow-y: scroll;
  width: 80%;
  max-width: 1200px;
  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);
  border-radius: 15px;
  border: 1px solid #fff;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const AutoCompeleteItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-bottom: 1px solid #e6e6e6e6;
  width: 100%;
  border-radius: 20px;
  padding: 1px 5px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  transition: all 0.5s ease;
  scale: 0.98;
  &:hover {
    transform: scale(1.02);
    background: #f6f6f6f6;
  }
`;

const AutoCompeleteImage = styled.img`
  height: 50px;
  border-radius: 2rem;
`;

const ListContainer = styled.div``;

const Option = styled.option``;

const ProductsPage = () => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [searchedItem, setSearchedItem] = useState([]);
  const [valueSearch, setValueSearch] = useState("");

  const { data: products } = useQuery({
    queryKey: ["productsDataSearch"],
    queryFn: async () => {
      const res = await publicRequest.get("/products/");
      // console.log(res.data);
      return res.data;
    },
  });

  let content = searchedItem?.map((product, index) => (
    <ListContainer key={index}>
      <Link style={{ textDecoration: "none" }} to={`/product/${product._id}`}>
        <AutoCompeleteItems key={index}>
          <AutoCompeleteImage src={product.img} />
          {product.name}
        </AutoCompeleteItems>
      </Link>
    </ListContainer>
  ));

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const debounce = (callBackFunc) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callBackFunc(...args);
      }, 500);
    };
  };

  const handleSearchChange = debounce((e) => {
    const value = e.target.value;
    setValueSearch(e.target.value);
    setSearchedItem(
      products.filter((products) =>
        products.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    // console.log(products);
  });

  const handleBlur = () => {
    setSearchedItem([]);
  };

  return (
    <Page onClick={handleBlur}>
      <NavBar />
      <Container>
        <FilterSearch>
          <SearchIcon />
          <SearchInput
            onChange={handleSearchChange}
            onFocus={handleSearchChange}
            type="text"
            placeholder="Search Products.."
          />
        </FilterSearch>
        {valueSearch?.length > 0 && (
          <SearchContainer>{content}</SearchContainer>
        )}
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select defaultValue="" name="category" onChange={handleFilters}>
              <Option value="">Category</Option>
              <Option>Accessories</Option>
              <Option>Engine</Option>
              <Option>Filter</Option>
              <Option>Plug</Option>
              <Option>Pump</Option>
              <Option>Radiator</Option>
              <Option>Timing Belt</Option>
              <Option>V-Belt</Option>
              <Option>Oil</Option>
              <Option>Injectors</Option>
              <Option>Thermostat</Option>
              <Option>Intercooler</Option>
              <Option>Cooler</Option>
              <Option>Pipes</Option>
              <Option>Heating</Option>
              <Option>Valve</Option>
              <Option>Exhaust</Option>
              <Option>Door</Option>
              <Option>Light</Option>
              <Option>Sensor</Option>
              <Option>Gear</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products page={true} filters={filters} sort={sort} />
      <Footer />
    </Page>
  );
};

export default ProductsPage;
