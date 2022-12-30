import React, { useState } from "react";
import { cartActions } from "../../Redux/cartRedux";
import { useQuery } from "@tanstack/react-query";
import { publicRequest, userRequest } from "../../Utils/requestMethods";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
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
import { useNavigate } from "react-router";

const Appointment = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state.auth.email);
  const phone = useSelector((state) => state.auth.phone);
  const name = useSelector((state) => state.auth.name);
  const [time, setTime] = useState("");
  const [dateValue, setDateValue] = useState(dayjs(null));
  const [timeDisabled, setTimeDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");
  let availableSlot1 = false;
  let availableSlot2 = false;
  let availableSlot3 = false;
  let availableSlot4 = false;

  const { data: slots, isFetching } = useQuery({
    queryKey: ["slotData"],
    queryFn: async () => {
      const res = await publicRequest.get(`/slots/`);
      // console.log(res.data);
      return res.data;
    },
  });

  if (!isFetching) {
    // console.log(slots);
    // eslint-disable-next-line
    slots.map((slot) => {
      // console.log(slot.slotDate);
      // console.log(formattedDate);
      if (formattedDate === slot.slotDate) {
        // console.log(formattedDate);
        switch (slot.slotTime) {
          case "1":
            availableSlot1 = true;
            break;
          case "2":
            availableSlot2 = true;
            break;
          case "3":
            availableSlot3 = true;
            break;
          case "4":
            availableSlot4 = true;
            break;
          default:
            availableSlot1 = false;
            availableSlot2 = false;
            availableSlot3 = false;
            availableSlot4 = false;
            break;
        }
      }
    });
  }

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    if (event.target.value > 0 && event.target.value < 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleChangeDate = (newValue) => {
    setDateValue(newValue);
    const day = String(newValue.$D).padStart(2, "0");
    const month = String(newValue.$M + 1).padStart(2, "0");
    setFormattedDate(`${day}/${month}/${newValue.$y}`);
    handleToggleTime();
  };

  const handleToggleTime = () => {
    setTimeDisabled(false);
  };

  const handleClick = async () => {
    const newDate = dateValue.toISOString();
    const dateArray = newDate.split("T");
    const newDateArray = dateArray[0];
    const newstDate = newDateArray.split("-");

    const day = String(newstDate[2]).padEnd(2, "0");
    const month = String(newstDate[1]).padEnd(2, "0");
    const year = newstDate[0];

    await userRequest.post(`/appointments/${userId}`, {
      userId: userId,
      name,
      email,
      phone,
      products: cart || [],
      service: props.service,
      slotTime: time,
      slotDate: `${day}/${month}/${year}`,
    });
    dispatch(cartActions.clearCartHandler({ items: [], totalAmount: 0 }));
    navigate("/");
  };

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <MobileDatePicker
            label="Schedule your Service"
            inputFormat="DD/MM/YYYY"
            minDate={dayjs()}
            value={dateValue}
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
                <MenuItem disabled={availableSlot1} value={1}>
                  08:30 - 10:30
                </MenuItem>
                <MenuItem disabled={availableSlot2} value={2}>
                  10:30 - 12:30
                </MenuItem>
                <MenuItem disabled={availableSlot3} value={3}>
                  13:00 - 15:00
                </MenuItem>
                <MenuItem disabled={availableSlot4} value={4}>
                  15:30 - 17:30
                </MenuItem>
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
