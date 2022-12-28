import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateFunc) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateFunc(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInputState({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchInputState({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInputState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
