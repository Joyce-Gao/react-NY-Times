import React from "react";
import { UserForm } from "../components/UserForm";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-container">
      <div className="sign-container-wrap">
        <UserForm />
      </div>
    </div>
  );
};
export default SignIn;
