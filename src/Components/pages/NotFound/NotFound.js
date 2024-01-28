import React from "react";
import "./NotFound.css";

import NotFoundImg from "../../../Assets/images/404-page-not-found-illustration-2048x998-yjzeuy4v.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container-fluid">
        <div className="box">
          <img src={NotFoundImg} alt=""></img>
          <br />
          <h1> Page Not found</h1>
          <p>
            Congress general secretary Jairam Ramesh also said violence persists
            and social harmony has been destroyed in the state
          </p>
          <br />

          <div className="  btnn">
            <Link to={"/"}>
              <Button variant="contained" disableElevation>
                Back to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
