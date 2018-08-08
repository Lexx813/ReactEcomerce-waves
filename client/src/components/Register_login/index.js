import React from "react";
import MyButton from "../utils/button";
import Login from "./Login";

const RegisterLogin = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea
              necessitatibus eum magni neque sit!Dignissimos laborum fuga
              voluptatum sequi officiis, odit necessitatibus animi consequatur
              veritatis fugiat minus perferendis tempora doloribus ?
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Registered customers</h2>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
