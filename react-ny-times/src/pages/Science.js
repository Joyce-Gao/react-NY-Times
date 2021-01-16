import React from "react";
import { Header } from "../components/header";
import { List } from "../components/List";
import { NYAPPKEY } from "../constants/Common";

const Science = () => {
  return (
    <>
      <Header />
      <div className="top-space">
        <List url={`/svc/topstories/v2/science.json?api-key=${NYAPPKEY}`} />
      </div>
    </>
  );
};

export default Science;
