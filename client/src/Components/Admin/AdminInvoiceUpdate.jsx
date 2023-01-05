import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import styled from "styled-components";
import { useState } from "react";
import Loading from "../Loading";
import { useQuery } from "@tanstack/react-query";
import { publicRequest, userRequest } from "../../Utils/requestMethods";
import { toast, ToastContainer } from "react-toastify";

const AdminInvoiceUpdate = (props) => {
  // console.log(props);
  const info = props.info;
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const total = parseFloat(props.updatedTotalPrice);
  const totalProduct = parseFloat(props.updatedProductPrice);

  const { data: products, isFetching } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await publicRequest.get("/products/");
      //   console.log(res.data);
      return res.data;
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log("pressed");
    toast.success(
      "You successfully added an item to the Cliient's Service Invoice"
    );
    await userRequest.put(`/appointments/update/${info.serviceId}`, {
      products: item,
      totalAmountProducts: item.price + totalProduct,
      totalAppointmentAmount: item.price + total,
    });
    setItem("");
    setValue("");
    setDisabled(true);
    props.updateProduct({
      name: item.name,
      price: item.price,
      amount: 1,
    });
  };

  const handleProductUpdate = (event) => {
    const product = event.target.value;
    setDisabled(false);
    setItem({ ...product, amount: 1 });
    setValue(product);
  };

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : (
        <AdminProductsUpdate>
          <FormControl sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-required-label">
              Add the Products Here
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={value}
              label="Products *"
              onChange={handleProductUpdate}
            >
              <MenuItem value={""}>
                <em>None</em>
              </MenuItem>
              {products.map((product) => (
                <MenuItem key={product._id} value={product}>
                  {product.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              OBS: If the item added does not show up in the list anymore,
              pelase go back to the previous page and check if it is there.
            </FormHelperText>
          </FormControl>
          <Button disabled={disabled} onClick={handleClick}>
            Adicionar <Add />
          </Button>
        </AdminProductsUpdate>
      )}
      <ToastContainer />
    </div>
  );
};

export default AdminInvoiceUpdate;

const AdminProductsUpdate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 8px 12px;
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
