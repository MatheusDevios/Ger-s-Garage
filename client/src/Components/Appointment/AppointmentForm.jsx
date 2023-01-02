import { FormLabel } from "@mui/material";
import styled from "styled-components";

const AppointmentForm = (props) => {
  const { type, maker, license } = props;
  return (
    <div>
      <Form>
        <InputDetail>
          <FormLabel>Vehicle Type: </FormLabel>
          <FormLabelComponent>{type}</FormLabelComponent>
        </InputDetail>
        <InputDetail>
          <FormLabel>Maker: </FormLabel>
          <FormLabelComponent>{maker}</FormLabelComponent>
        </InputDetail>
        <InputDetail>
          <FormLabel>License plate: </FormLabel>
          <FormLabelComponent>{license}</FormLabelComponent>
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

const FormLabelComponent = styled.label`
  color: rgb(163, 153, 153);
  font-weight: 700;
  font-size: 1rem;
`;
