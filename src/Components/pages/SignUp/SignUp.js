import React, { useState } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Button } from "@mui/material";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../FIrebase/Firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const auth = getAuth(app);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showLoder, setShowloder] = useState(false);
  const [fromFileds, setFormFileds] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const signUp = () => {
    setShowloder(true);
    createUserWithEmailAndPassword(auth, fromFileds.email, fromFileds.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setShowloder(false);
        setFormFileds({
          email: "",
          password: "",
          confirm_password: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormFileds(() => ({
      ...fromFileds,
      [name]: value,
    }));
    // console.log(fromFileds);
    // console.log(e.target.value);
  };

  return (
    <div>
      <section className="signIn mb-5">
        <div className="breadcrumbWrapper">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>

        <div className="container loginrapper">
          <div className="card shadow">
            <Backdrop
              sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoder}
              className="formLoders"
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <h3 className="">Sign Up</h3>
            <form className="mt-4">
              <div className="form-group mb-4 w-100">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  className="w-100"
                  onChange={onChangeField}
                  value={fromFileds.email}
                />
              </div>

              <div className="form-group mb-4 w-100 ">
                <div className=" position-relative">
                  <TextField
                    id="password"
                    type={showPassword === false ? "password" : "text"}
                    name="password"
                    label="Password"
                    className="w-100"
                    onChange={onChangeField}
                    value={fromFileds.password}
                  />
                  <Button
                    className="Icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </Button>
                </div>
              </div>
              <div className="form-group mb-4 w-100 ">
                <div className=" position-relative">
                  <TextField
                    id="confirm_password"
                    type={showPassword1 === false ? "password" : "text"}
                    name="confirm_password"
                    label="Confirm Password"
                    className="w-100"
                    onChange={onChangeField}
                    value={fromFileds.confirm_password}

                  />
                  <Button
                    className="Icon"
                    onClick={() => setShowPassword1(!showPassword1)}
                  >
                    {showPassword1 === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </Button>
                </div>
              </div>

              <div className="form-groups mt-4 mb-4 w-100 ">
                <Button className=" btn-g btn-lg w-100 mt-4" onClick={signUp} >
                  <p className="textCenter "> signUp</p>
                </Button>
              </div>

              <p className="text-center">
                Already have an account{" "}
                <b>
                  <Link to={"/signin"}>SignIn</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
