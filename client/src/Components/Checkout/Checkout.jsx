import React from "react";
import useInput from "../../hooks/use-input";
import styled from "styled-components";
import { toast } from "react-toastify";

const isNotEmpty = (value) => value.trim() !== "";
const isPostalCode = (value) => value.trim().length >= 7;

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);
  const {
    value: codeValue,
    isValid: codeIsValid,
    hasError: codeError,
    valueChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
    reset: resetCode,
  } = useInput(isPostalCode);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountry,
  } = useInput(isNotEmpty);

  const formIsValid =
    nameIsValid &&
    codeIsValid &&
    streetIsValid &&
    cityIsValid &&
    countryIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid || !event) {
      toast.error("Please enter valid information.");
      return;
    }

    props.onConfirm({
      street: streetValue,
      postalCode: codeValue,
      country: countryValue,
      city: cityValue,
    });

    resetCity();
    resetCountry();
    resetCode();
    resetName();
    resetStreet();
  };

  return (
    <Form onSubmit={confirmHandler}>
      <Control>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameError && <p> Please enter your Name.</p>}
      </Control>
      <Control>
        <label htmlFor="street">Address</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetError && <p> Please enter your Street Adress.</p>}
      </Control>
      <Control>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={codeValue}
          onChange={codeChangeHandler}
          onBlur={codeBlurHandler}
        />
        {codeError && (
          <p> Please enter your Postal Code with 5 digits or more.</p>
        )}
      </Control>
      <Control>
        <label htmlFor="city">County</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityError && <p> Please enter your City Name.</p>}
      </Control>
      <Control>
        <label htmlFor="city">Country</label>
        <input
          type="text"
          id="city"
          value={countryValue}
          onChange={countryChangeHandler}
          onBlur={countryBlurHandler}
        />
        {countryError && <p> Please enter your City Name.</p>}
      </Control>
      <Actions>
        <ActionsButton type="button" onClick={props.onCloseCart}>
          Cancel
        </ActionsButton>
        <ActionsSubmit>Confirm</ActionsSubmit>
      </Actions>
    </Form>
  );
};

export default Checkout;

const Form = styled.form`
  margin: 1rem 0;
  overflow: auto;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;
  & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }
  & input {
    width: 40rem;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 100%;
  }
  & p {
    background-color: #ffeff1;
    color: red;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const ActionsButton = styled.button`
  font: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  color: black;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  transition: all 0.5s ease;
  transform: scale(0.95);
  &:hover {
    transform: scale(1.1);
  }
`;

const ActionsSubmit = styled.button`
  font: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  background-color: black;
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  color: white;
  transition: all 0.5s ease;
  transform: scale(0.95);
  &:hover {
    transform: scale(1.1);
  }
`;
