import React from "react";
import { Header } from "../components/header";
import { List } from "../components/List";
import { NYAPPKEY } from "../constants/Common";

const World = (props) => {
  return (
    <>
      <Header />
      <div className="top-space">
        <List url={`/svc/topstories/v2/world.json?api-key=${NYAPPKEY}`} />
      </div>
    </>
  );
};

export default World;
