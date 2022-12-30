import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { publicRequest } from "../../Utils/requestMethods";
import Loading from "../Loading";
import styled from "styled-components";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Appointment = () => {
  const email = useSelector((state) => state.auth.email);
  const phone = useSelector((state) => state.auth.phone);
  const name = useSelector((state) => state.auth.name);
  let content;
  const [value, setValue] = useState(dayjs(null));
  const [timeDisabled, setTimeDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { data: slots, isFetching } = useQuery({
    queryKey: ["servicesData"],
    queryFn: async () => {
      //   console.log(value);
      const res = await publicRequest.get(`/slots/`);
      console.log(res.data);
      return res.data;
    },
  });

  if (isFetching) {
    content = <Loading />;
  } else {
    content = <div></div>;
  }
  const [time, setTime] = React.useState("");

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    if (event.target.value > 0 && event.target.value < 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
    handleToggleTime();
  };

  const handleToggleTime = () => {
    setTimeDisabled(false);
  };
  const handleToggle = () => {
    setButtonDisabled(false);
  };

  const handleClick = () => {};

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <MobileDatePicker
            label="Schedule your Service"
            inputFormat="DD/MM/YYYY"
            minDate={dayjs()}
            value={value}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <CalendarContainer>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-required-label">
                Time
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={time}
                label="Time *"
                disabled={timeDisabled}
                onChange={handleChangeTime}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>08:30 - 10:30</MenuItem>
                <MenuItem value={2}>10:30 - 12:30</MenuItem>
                <MenuItem value={3}>13:00 - 15:00</MenuItem>
                <MenuItem value={4}>15:30 - 17:30</MenuItem>
              </Select>
              <FormHelperText>
                Select the time for your appointment
              </FormHelperText>
            </FormControl>
            <Button disabled={buttonDisabled} onClick={handleClick}>
              SCHEDULE
            </Button>
          </CalendarContainer>
        </Stack>
      </LocalizationProvider>
    </Container>
  );
};

export default Appointment;

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80%;
  padding: 10px;
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 0.8rem;
  border: 1px solid black;
  box-shadow: 0 3px 24px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #fff;
  }
`;
