import React from "react";
import { List } from "../components/List";
import { NY_APP_KEY } from "../constants/Common";
const Homepage = () => {
  return (
    <>
      <div className="top-space">
        <List url={`/svc/topstories/v2/home.json?api-key=${NY_APP_KEY}`} />
      </div>
    </>
  );
};
export default Homepage;
