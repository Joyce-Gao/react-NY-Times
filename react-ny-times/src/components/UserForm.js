import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SIGNIN, REGISTER } from "../constants/Common";
import { signInAction, registerAction } from "../actions/UserActions";

export const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getError, setGetError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setGetError(false);
  }, []);
  const handleUserForm = (e) => {
    e.preventDefault();
    const actionType = isRegister ? registerAction : signInAction;
    dispatch(actionType(email, password)).then(
      (res) => {
        setGetError(false);
        history.push("/");
      },
      (err) => {
        setGetError(true);
        setErrorMessage(err?.response?.data?.message);
      }
    );
  };
  return (
    <>
      <a href="/" className="caption">
        NY Times
      </a>
      <div className="sign-description">
        {isRegister ? "Register" : "Sign In"} to your NY Times Account
        <br />
        Welcome! {isRegister ? "Register" : "Sign In"} to your NY Times account
        below with your email and password.
      </div>
      {getError && <Alert variant="danger">{errorMessage}</Alert>}
      <Form className="sign-form" onSubmit={handleUserForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onFocus={() => setGetError(false)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>
          {isRegister ? REGISTER : SIGNIN}
        </Button>
        {isRegister ? (
          <div className="login-footer-declare">
            Have an account?
            <Button variant="link" onClick={() => setIsRegister(false)}>
              please sign in
            </Button>
          </div>
        ) : (
          <div className="login-footer-declare">
            Don't have an account?
            <Button variant="link" onClick={() => setIsRegister(true)}>
              Create Account
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};
