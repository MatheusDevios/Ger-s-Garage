import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import styled from "styled-components";

const isNotEmpty = (value) => value.trim() !== "";
const isPostalCode = (value) => value.trim().length === 7;

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

    if (!formIsValid) {
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
          <p> Please enter your Postal Code with no space and 5 digits.</p>
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
`;

const ActionsButton = styled.button`
  font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  &:hover,
  :active {
    background-color: #ffe6dc;
  }
`;

const ActionsSubmit = styled.button`
  border: 1px solid #5a1a01;
  background-color: #5a1a01;
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  color: white;
  &:hover,
  :active {
    background-color: #7a2706;
  }
`;
