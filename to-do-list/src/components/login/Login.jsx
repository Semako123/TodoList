import React from "react";
import "./login.css";
import image from "../images/Checklist.gif";
import image2 from "../images/Completed.gif";
import logo from "../images/oases.png";
import {
  InputAdornment,
  InputLabel,
  TextField,
  IconButton,
  Input,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [conPassword, setconPassword] = useState("");
  const [errMessage, seterrMessage] = useState({
    userName: "",
    passWord: "",
    conPassword: "",
  });
  const [errorState, seterrorState] = useState({
    password: false,
    userName: false,
    conPassword: false,
  });

  useEffect(() => {
    handleConPasswordValid();
  }, [conPassword, password]);

  useEffect(() => {
    handlePasswordValid();
  }, [password]);

  useEffect(() => {
    handleNameValid();
  }, [userName]);

  const [value, setValue] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  const handleConPasswordValid = () => {
    if (conPassword !== password) {
      seterrMessage({ ...errMessage, conPassword: "Passwords don't match" });
      seterrorState({ ...errorState, conPassword: true });
    } else {
      seterrMessage({ ...errMessage, conPassword: "" });
      seterrorState({ ...errorState, conPassword: false });
    }
  };

  const handleNameValid = () => {
    if (userName.length < 5) {
      seterrMessage({
        ...errMessage,
        userName: "Username is less than 5 characters",
      });
      seterrorState({ ...errorState, userName: true });
    } else {
      seterrMessage({ ...errMessage, userName: "" });
      seterrorState({ ...errorState, userName: false });
    }
  };
  const handlePasswordValid = () => {
    if (password.length < 8) {
      seterrMessage({
        ...errMessage,
        passWord: "Password is less than 8 characters",
      });
      seterrorState({ ...errorState, password: true });
    } else {
      seterrMessage({ ...errMessage, passWord: "" });
      seterrorState({ ...errorState, password: false });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const setDefault = () => {
    setValue({ ...value, showPassword: false });
    setpassword("");
    setuserName("");
    setconPassword("");
    seterrorState({ userName: false, password: false, conPassword: false });
    seterrMessage({ userName: "", passWord: "", conPassword: "" });
  };

  const handleSwitchSignup = () => {
    const formPage = document.querySelector(".loginSection");
    const imageSec = document.querySelector(".imageSection");
    formPage.style.transform = "translateY(-85vh)";
    imageSec.style.transform = "translateY(42.8vh)";
    setDefault();
  };

  const handleSwitchLogin = () => {
    const formPage = document.querySelector(".loginSection");
    const imageSec = document.querySelector(".imageSection");
    formPage.style.transform = "translateY(0vh)";
    imageSec.style.transform = "translateY(-42.8vh)";
    setDefault();
  };

  const handleNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handlePassChange = (e) => {
    setpassword(e.target.value);
  };

  const handleConPassChange = (e) => {
    setconPassword(e.target.value);
  };

  const LoginRq = () => {};

  return (
    <>
      <div className="background">
        <div className="outerBox">
          <div className="divSection imageSection">
            <img
              src={image}
              alt="Oases Sign Up page"
              className="imageSection"
            />
            <img src={image2} alt="Oases Login Page" className="imageSection" />
          </div>
          <div className="divSection loginSection">
            <div>
              <img src={logo} alt="Logo of oases" className="logo" />
              <h5 className="intro">Welcome to Oases Todo</h5>
              <div className="form">
                <TextField
                  className="textField"
                  label="Username or email"
                  variant="standard"
                  value={userName}
                  onChange={handleNameChange}
                  helperText=""
                  // error
                />
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    style={{ margin: "-5px 15%" }}
                  >
                    Password
                  </InputLabel>
                  <Input
                    label="Password"
                    className="passField"
                    type={value.showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePassChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ margin: "-10px auto" }}
                        >
                          {value.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <button className="loginBtn">Login</button>
              </div>
              <div className="bottom">
                <h6 className="bottomText">Don't have an account yet?</h6>
                <h6
                  className="bottomLink bottomText"
                  onClick={handleSwitchSignup}
                >
                  Create an account
                </h6>
              </div>
            </div>
            <div>
              <img src={logo} alt="Logo of oases" className="logo" />
              <h5 className="intro">Welcome to Oases Todo</h5>
              <div className="form">
                <TextField
                  error={errorState.userName}
                  className="textField"
                  label="Username or email"
                  variant="standard"
                  value={userName}
                  onChange={handleNameChange}
                  helperText={errMessage.userName}
                />
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    error={errorState.password}
                    style={{ margin: "-5px 15%" }}
                  >
                    Password
                  </InputLabel>
                  <Input
                    error={errorState.password}
                    className="passField"
                    type={value.showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePassChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ margin: "-10px auto" }}
                        >
                          {value.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className="errorMessage">{errMessage.passWord}</div>
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    style={{ margin: "-5px 15%" }}
                    error={errorState.conPassword}
                  >
                    Confirm Password
                  </InputLabel>
                  <Input
                    error={errorState.conPassword}
                    className="passField"
                    type={value.showPassword ? "text" : "password"}
                    value={conPassword}
                    onChange={handleConPassChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ margin: "-10px auto" }}
                        >
                          {value.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <div className="errorMessage">{errMessage.conPassword}</div>
                </FormControl>
                <button className="loginBtn">Signup</button>
              </div>
              <div className="bottom">
                <h6 className="bottomText">Already created an account?</h6>
                <h6
                  className="bottomText bottomLink"
                  onClick={handleSwitchLogin}
                >
                  Login
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
