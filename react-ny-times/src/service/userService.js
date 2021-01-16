import axios from "axios";

export const login = (email, password) => {
  return axios.post(
    "/auth/login",
    {
      email,
      password,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const register = (email, password) => {
  return axios.post(
    "/auth/register",
    {
      email,
      password,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const refreshToken_request = (token) => {
  return axios.post(
    "/auth/refresh",
    {
      access_token: token,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};
