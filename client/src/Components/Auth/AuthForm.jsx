import "./authForm.css";
import { useState, useRef } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useDispatch } from "react-redux";
import { authActions } from "../../Redux/authRedux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const AuthComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //ref to get the input form values
  const emailInputRef = useRef();
  const passwordInputRef1 = useRef();
  const passwordInputRef2 = useRef();
  const nameInputRef = useRef();
  const surInputRef = useRef();
  const numberInputRef = useRef();
  let enteredEmail = "";
  let enteredPassword = "";
  let enteredFirstName = "";
  let enteredSurname = "";
  let enteredMobilePhone = "";

  const [equalPassword, setEqualPassword] = useState("password"); //to change password input classes

  const [isLogin, setIsLogin] = useState(true);

  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  //changes if I'm on the login form or sign up
  const switchAuthModeHandler = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  //changes the password input class
  const clearWrongPassword = () => {
    setEqualPassword("password");
  };

  const passwordIsEqual = (event) => {
    event.preventDefault();

    //if I'm on login page I get the values to login
    if (isLogin) {
      enteredEmail = emailInputRef.current.value;
      enteredPassword = passwordInputRef1.current.value;
      submitHandler();
      //if I'm registering a new user I have to compare if the passwords typed are equal.
    } else if (
      passwordInputRef1.current.value === passwordInputRef2.current.value
    ) {
      enteredEmail = emailInputRef.current.value;
      enteredPassword = passwordInputRef1.current.value;
      submitHandler();
    } else {
      //change the password input class
      setEqualPassword("password invalid");
    }
  };

  const submitHandler = async (event) => {
    // event.preventDefault();

    try {
      //REGISTERING A NEW USER
      //if I'm loging in, i don't need to submit/post anithing to our DB only if I'm registering a new user
      if (!isLogin) {
        enteredFirstName = nameInputRef.current.value;
        enteredSurname = surInputRef.current.value;
        enteredMobilePhone = numberInputRef.current.value;
        await publicRequest.post("/auth/register", {
          enteredFirstName,
          enteredSurname,
          enteredMobilePhone,
          enteredEmail,
          enteredPassword,
        });
      }

      const res = await publicRequest.post("/auth/login", {
        enteredEmail,
        enteredPassword,
      });

      const data = await res.data;
      console.log("Data: ", data);

      // send data to Redux
      dispatch(
        authActions.login({
          token: data.accessToken,
          isAdmin: data.isAdmin,
          userId: data._id,
        })
      );

      navigate("/");

      // console.log(data);
    } catch (err) {
      setEqualPassword("password invalid");
      alert(err.message);
    }
  };

  return (
    <ComponentAuth>
      <Auth>
        <AuthH1>{isLogin ? "Sign In" : "Sign Up"}</AuthH1>
        {/* <form> */}
        <form onSubmit={passwordIsEqual}>
          {!isLogin && (
            <div>
              <Control>
                <ControlLabel htmlFor="firstName">First Name</ControlLabel>
                <ControlInput
                  type="text"
                  id="firstName"
                  placeholder="First Name..."
                  required
                  ref={nameInputRef}
                />
              </Control>
              <Control>
                <ControlLabel htmlFor="surName">Surname</ControlLabel>
                <ControlInput
                  type="text"
                  id="surName"
                  placeholder="Last Name..."
                  required
                  ref={surInputRef}
                />
              </Control>
              <Control>
                <ControlLabel htmlFor="phone">Mobile Number</ControlLabel>
                <ControlInput
                  type="text"
                  id="phone"
                  placeholder="Phone Number with no space..."
                  required
                  ref={numberInputRef}
                />
              </Control>
            </div>
          )}
          <Control>
            <ControlLabel htmlFor="email">Your Email</ControlLabel>
            <ControlInput
              type="email"
              id="email"
              placeholder="Email..."
              required
              ref={emailInputRef}
            />
          </Control>
          <Control>
            <ControlLabel htmlFor="password">Your Password</ControlLabel>
            <div className={equalPassword}>
              <ControlInput
                type={isShown ? "text" : "password"}
                id="password"
                ref={passwordInputRef1}
                onChange={clearWrongPassword}
                placeholder="Password..."
                required
              />
              {!isLogin && (
                <ControlInput
                  type={isShown ? "text" : "password"}
                  id="password"
                  ref={passwordInputRef2}
                  onChange={clearWrongPassword}
                  placeholder="Password..."
                  required
                />
              )}
            </div>
            <div className="checkbox-container">
              <h4 htmlFor="checkbox">Show password?</h4>
              <CheckboxContainerInput
                id="checkbox"
                type="checkbox"
                checked={isShown}
                onChange={togglePassword}
              />
            </div>
          </Control>
          <Actions>
            <ActionsButton>
              {isLogin ? "Login" : "Create Account"}
            </ActionsButton>
            <ActionsToggle
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </ActionsToggle>
          </Actions>
        </form>
      </Auth>
    </ComponentAuth>
  );
};

export default AuthComp;

const ComponentAuth = styled.section`
  border-top: 1px solid #da3939;
  border-bottom: 1px solid #da3939;
  height: 74vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  ${mobile({
    height: "100vh",
  })}
`;

const Auth = styled.div`
  margin: 5rem auto;
  border: 1px solid #da3939;
  box-shadow: 0 3px 24px rgb(0 0 0 / 50%);
  border-radius: 1rem;
  width: 40rem;
  padding: 2rem;
`;

const AuthH1 = styled.h1`
  padding-bottom: 1.4rem;
  text-align: center;
  color: black;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;
`;

const ControlInput = styled.input`
  font: inherit;
  background-color: #f1e1fc;
  color: #38015c;
  border-radius: 4px;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 0.25rem;
`;

const ControlLabel = styled.label`
  display: block;
  color: black;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CheckboxContainerInput = styled.input`
  width: 3rem;
  height: 15px;
  align-items: center;
  align-content: center;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background-color: transparent;
    color: #da3939;
  }
`;

const ActionsButton = styled.button`
  background-color: initial;
  border: 1px solid #da3939;
  border-radius: 25px;
  cursor: pointer;
  font: inherit;
  padding: 0.5rem 2rem;
  &:hover {
    background-color: #da3939;
    color: whitesmoke;
  }
`;

const ActionsToggle = styled.button`
  margin-top: 10px;
  background-color: transparent;
  color: #e47e7e;
  border: none;
  padding: 8px 6px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #da3939;
  }
`;
