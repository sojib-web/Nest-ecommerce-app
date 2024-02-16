import React, { useState } from "react";
import "./SignIn.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Button } from "@mui/material";
import GoogleIcon from "../../../../src/Assets/images/google.png";


import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../FIrebase/Firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../App";


const auth = getAuth(app);


const GoogleProvider = new GoogleAuthProvider();


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showLoder, setShowloder] = useState(false);
  const [fromFileds, setFormFileds] = useState({
    email: "",
    password: "",

  });
  const context = useContext(MyContext);

  const history = useNavigate()
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

  const signIn = () => {
    setShowloder(true);
    signInWithEmailAndPassword(auth, fromFileds.email, fromFileds.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setShowloder(false);
        setFormFileds({
          email: "",
          password: "",

        });
        localStorage.setItem('isLogin', true);
        context.signIn()
        history('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };


  const singInWithGoogle = () => {
    setShowloder(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setShowloder(false);

        localStorage.setItem('isLogin', true);
        context.signIn()
        history('/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
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
            <Backdrop
              sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoder}
              className="formLoders"
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <h3 className="">Sign In</h3>
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

              <div className="form-groups mt-4 mb-4 w-100  text-align-items-center">
                <Button className=" btn-g btn-lg w-100 mt-4">
                  <p className="textCenter" onClick={signIn}>Sign In</p>
                </Button>
              </div>

              <div className="form-groups mt-4 mb-4 w-100 SignIn">
                <p className="text-center">OR</p>
                <Button className="w-100" variant="outlined" onClick={singInWithGoogle}>
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
