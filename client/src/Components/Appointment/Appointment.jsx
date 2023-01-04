import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { publicRequest, userRequest } from "../../Utils/requestMethods";
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
import { useNavigate } from "react-router";
import AppointmentForm from "./AppointmentForm";
import MechanicsForm from "./MechanicsForm";
import Loading from "../Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormLabel, Input } from "@mui/material";

const Appointment = (props) => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const totalAmountProducts = useSelector((state) => state.cart.totalAmount);
  const email = useSelector((state) => state.auth.email);
  const phone = useSelector((state) => state.auth.phone);
  const name = useSelector((state) => state.auth.name);
  const type = useSelector((state) => state.auth.type);
  const maker = useSelector((state) => state.auth.maker);
  const license = useSelector((state) => state.auth.license);
  const [time, setTime] = useState("");
  const [mechanic, setMechanic] = useState("");
  const [dateValue, setDateValue] = useState(dayjs(null));
  const [professionalsDisabled, setProfessionalsDisabled] = useState(true);
  const [timeDisabled, setTimeDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");
  const [comments, setComments] = useState("");
  const [availableSlot1, setAvailableSlot1] = useState(false);
  const [availableSlot2, setAvailableSlot2] = useState(false);
  const [availableSlot3, setAvailableSlot3] = useState(false);
  const [availableSlot4, setAvailableSlot4] = useState(false);

  const {
    data: slots,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["slotData"],
    queryFn: async () => {
      const res = await publicRequest.get("/slots");
      // console.log(slots);
      return res.data;
    },
  });

  const isSunday = (date) => {
    const day = date.day();
    return day === 0;
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    // console.log(formattedDate);
    if (event.target.value > 0 && event.target.value < 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleChangeDate = (newValue) => {
    setDateValue(newValue);
    refetch();
    setMechanic(0);
    setTime(0);
    setButtonDisabled(true);
    const day = String(newValue.$D).padStart(2, "0");
    const month = String(newValue.$M + 1).padStart(2, "0");
    setFormattedDate(`${day}/${month}/${newValue.$y}`);
    handleToggleProfessionals();
  };

  const handleToggleProfessionals = () => {
    setProfessionalsDisabled(false);
  };

  const handleToggleTime = (value) => {
    setMechanic(value);
    setAvailableSlot1(false);
    setAvailableSlot2(false);
    setAvailableSlot3(false);
    setAvailableSlot4(false);
    // eslint-disable-next-line
    slots.map((slot) => {
      if (formattedDate === slot.slotDate) {
        // eslint-disable-next-line
        if (value == slot.mechanic && slot.slotTime) {
          // console.log(slot.slotTime);
          switch (value) {
            case 1:
              switch (slot.slotTime) {
                case "1":
                  setAvailableSlot1(true);
                  break;
                case "2":
                  setAvailableSlot2(true);
                  break;
                case "3":
                  setAvailableSlot3(true);
                  break;
                case "4":
                  setAvailableSlot4(true);
                  break;
                default:
                  setAvailableSlot1(false);
                  setAvailableSlot2(false);
                  setAvailableSlot3(false);
                  setAvailableSlot4(false);
                  break;
              }
              break;
            case 2:
              switch (slot.slotTime) {
                case "1":
                  setAvailableSlot1(true);
                  break;
                case "2":
                  setAvailableSlot2(true);
                  break;
                case "3":
                  setAvailableSlot3(true);
                  break;
                case "4":
                  setAvailableSlot4(true);
                  break;
                default:
                  setAvailableSlot1(false);
                  setAvailableSlot2(false);
                  setAvailableSlot3(false);
                  setAvailableSlot4(false);
                  break;
              }
              break;
            case 3:
              switch (slot.slotTime) {
                case "1":
                  setAvailableSlot1(true);
                  break;
                case "2":
                  setAvailableSlot2(true);
                  break;
                case "3":
                  setAvailableSlot3(true);
                  break;
                case "4":
                  setAvailableSlot4(true);
                  break;
                default:
                  setAvailableSlot1(false);
                  setAvailableSlot2(false);
                  setAvailableSlot3(false);
                  setAvailableSlot4(false);
                  break;
              }
              break;
            case 4:
              switch (slot.slotTime) {
                case "1":
                  setAvailableSlot1(true);
                  break;
                case "2":
                  setAvailableSlot2(true);
                  break;
                case "3":
                  setAvailableSlot3(true);
                  break;
                case "4":
                  setAvailableSlot4(true);
                  break;
                default:
                  setAvailableSlot1(false);
                  setAvailableSlot2(false);
                  setAvailableSlot3(false);
                  setAvailableSlot4(false);
                  break;
              }
              break;
            default:
              setAvailableSlot1(false);
              setAvailableSlot2(false);
              setAvailableSlot3(false);
              setAvailableSlot4(false);
              break;
          }
        }
      }
    });
    if (value === 0) {
      setTimeDisabled(true);
    } else {
      setTimeDisabled(false);
    }
  };

  const haldleFormResult = () => {};

  const handleCommentChange = (event) => {
    setComments(event.target.value);
  };

  const handleClick = async () => {
    if (isLogged) {
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
        type,
        maker,
        license,
        products: [],
        totalAmountProducts,
        service: props.service,
        slotTime: time,
        slotDate: `${day}/${month}/${year}`,
        comments,
        mechanic,
      });
      setButtonDisabled(true);
      toast.success("You have successfully scheduled your appointment!");
      setTimeout(function () {
        navigate("/");
      }, 2000);
    } else {
      toast.warn(
        "Sorry, we can not schedule an appointment if you are not logged in!"
      );
    }
  };

  return (
    <Container>
      {isFetching ? (
        <Loading />
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <MobileDatePicker
              label="Schedule your Service"
              inputFormat="DD/MM/YYYY"
              shouldDisableDate={isSunday}
              minDate={dayjs()}
              value={dateValue}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <CalendarContainer>
              <InfoContainer>
                <MechanicsForm
                  mechanic={mechanic}
                  disable={professionalsDisabled}
                  onChange={handleToggleTime}
                />
                <FormControl
                  disabled={timeDisabled}
                  required
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-required-label">
                    Time
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={time}
                    label="Time *"
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
              </InfoContainer>
              <AppointmentDetailsContainer>
                <AppointmentForm
                  type={type}
                  maker={maker}
                  license={license}
                  formResult={haldleFormResult}
                />
              </AppointmentDetailsContainer>
            </CalendarContainer>
            <FormLabel>Comments: </FormLabel>
            <Input
              placeholder="Type any comment for your appointment here."
              onChange={handleCommentChange}
            />
            <Button disabled={buttonDisabled} onClick={handleClick}>
              SCHEDULE
            </Button>
            <ToastContainer
              newestOnTop={true}
              autoClose={5000}
              pauseOnHover
              theme="dark"
            />
          </Stack>
        </LocalizationProvider>
      )}
    </Container>
  );
};

export default Appointment;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 10px;
`;

const AppointmentDetailsContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 15px;
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
