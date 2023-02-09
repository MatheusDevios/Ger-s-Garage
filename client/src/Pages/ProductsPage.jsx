import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Products from "../Components/Products";
import styled from "styled-components";
import { mobile } from "../Utils/responsive";
// import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ width: "99%" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductsPage = () => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  // const [filters, setFilters] = useState("");
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <NavBar />
      <Container>
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
    </div>
  );
};

export default ProductsPage;
