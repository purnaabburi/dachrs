import React from "react";
import "./Login.css";
import { Card, Button, TextField } from "@material-ui/core";
import logo from "../../images/logo.svg";
import google from "../../images/search.png";
import fb from "../../images/facebook.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <div>
        <h1 className="background-img"></h1>
        <Card className="modal-pop" style={{ width: "27%", height: "82%" }}>
          <div>
            <h2 className="login-sty">Login</h2>
            <h5 className="h6-sty">
              <span>Don't have an Account yet ?</span>
              <span>
                <Link
                  style={{
                    color: "red",
                    position: "absolute",
                    left: "282px",
                    opacity: "0.7",
                  }}
                >
                  Sign Up
                </Link>
              </span>
            </h5>
          </div>

          <div style={{ margin: "29px", marginTop: "9px" }}>
            <span style={{ display: "block", marginBottom: "10px" }}>
              Email
            </span>
            <TextField
              required
              //   label="Email"
              className="login-registerName"
              variant="outlined"
              placeholder="email@gmail.com"
              name="email"
            />
            <div style={{ marginTop: "10px" }}>
              <span>Password</span>
              <span>
                <Link
                  href="anil"
                  style={{ color: "red", marginLeft: "35%", opacity: "0.7" }}
                >
                  Forgot Password?
                </Link>
              </span>
            </div>

            <TextField
              required
              //   label="Password"
              className="psw-sty"
              variant="outlined"
              placeholder="Enter 6 character or more"
              name="Password"
            />
            <div>
              <Checkbox
                // defaultChecked
                size="small"
                inputProps={{ "aria-label": "checkbox with small size" }}
              />
              Remember me
            </div>

            <div style={{ marginTop: "" }}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className="sub-mit"
                // disabled={submitted}
                validators={["required"]}
                style={{ width: "20rem" }}
              >
                LogIn
              </Button>
            </div>




            <div className="div-stys" >
  <span className="hr-text" >
    Section Title 
  </span>
</div>



            {/* <hr style={{ position: "relative", top: "25px" }} /> */}
            <div style={{ marginTop: "38px ", marginLeft: "2px" }}>
              <span style={{ display: "flex" }}>
                <Card
                  style={{
                    marginRight: "16px",
                    width: "222px",
                    textAlign: "center",
                    height: "50px" ,
                    border:"1px solid tomato"
                  }}
                >
                  <img src={google} al="" style={{
                    width: "38px",
                    margin: "8px"
                  }} />
                  <span style={{
                    position: "relative",
                    top: "-22px",
                    fontWeight: "600",
                    color: "tomato"
                  }}> Google</span>
                </Card>
                <Card
                  style={{
                    marginRight: "16px",
                    width: "222px",
                    textAlign: "center",
                    height: "50px" ,
                    border:"1px solid blue"
                  }}
                >
                  <img src={fb} alt="" style={{
                    width: "38px",
                    margin: "8px"
                  }} />
                  <span style={{
                    position: "relative",
                    top: "-22px",
                    fontWeight: "600",
                    color: "blue"
                  }}> Facebook</span>
                </Card>
                
              </span>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <img className="ideas-sty" src={logo} />
      </div>
    </div>
  );
}
