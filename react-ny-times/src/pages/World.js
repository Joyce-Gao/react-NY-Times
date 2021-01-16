import React from "react";
import { List } from "../components/List";
import { NY_APP_KEY } from "../constants/Common";

const World = (props) => {
  return (
    <>
      <div className="top-space">
        <List url={`/svc/topstories/v2/world.json?api-key=${NY_APP_KEY}`} />
      </div>
    </>
  );
};

export default World;
