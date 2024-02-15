import React, { useState } from "react";
import "./SignIn.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Button } from "@mui/material";
import GoogleIcon from "../../../../src/Assets/images/google.png";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <section className="signIn mb-5">
        <div className="breadcrumbWrapper">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>

        <div className="container loginrapper">
          <div className="card shadow">
            <h3 className="">Sign In</h3>
            <form className="mt-4">
              <div className="form-group mb-4 w-100">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  className="w-100"
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

              <div className="form-groups mt-4 mb-4 w-100  text-align-items-center">
                <Button className=" btn-g btn-lg w-100 mt-4">
                  <p className="textCenter">Sign In</p>
                </Button>
              </div>

              <div className="form-groups mt-4 mb-4 w-100 SignIn">
                <p className="text-center">OR</p>
                <Button className="w-100" variant="outlined">
                  <img src={GoogleIcon} alt="" />
                  Sign In With Google
                </Button>
              </div>

              <p className="text-center">
                Not have an account{" "}
                <b>
                  <Link to={"/signup"}>SignUp</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
