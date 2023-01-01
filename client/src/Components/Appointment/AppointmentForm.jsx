import { FormLabel } from "@mui/material";
import styled from "styled-components";

const AppointmentForm = () => {
  const value1 = "Honda";
  return (
    <div>
      <Form>
        <InputDetail>
          <FormLabel>Vehicle: </FormLabel>
          <FormLabel>{value1}</FormLabel>
        </InputDetail>
        <InputDetail>
          <FormLabel>Maker: </FormLabel>
          <FormLabel>{value1}</FormLabel>
        </InputDetail>
        <InputDetail>
          <FormLabel>License: </FormLabel>
          <FormLabel>{value1}</FormLabel>
        </InputDetail>
      </Form>
    </div>
  );
};

export default AppointmentForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`;

const InputDetail = styled.div`
  margin-bottom: 1rem;
`;
