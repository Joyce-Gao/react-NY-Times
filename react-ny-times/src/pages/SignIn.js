import React from "react";
import { UserForm } from "../components/UserForm";
import "./Signin.css";

const SignIn = () => {
  return (
    <div className="sign-contanier">
      <div className="sign-container-wrap">
        <UserForm />
      </div>
    </div>
  );
};
export default SignIn;
