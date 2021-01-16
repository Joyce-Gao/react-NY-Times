import React from "react";
import { List } from "../components/List";
import { NYAPPKEY } from "../constants/Common";

const World = (props) => {
  return (
    <>
      <div className="top-space">
        <List url={`/svc/topstories/v2/world.json?api-key=${NYAPPKEY}`} />
      </div>
    </>
  );
};

export default World;
