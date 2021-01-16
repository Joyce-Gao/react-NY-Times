import React from "react";
import { List } from "../components/List";
import { NYAPPKEY } from "../constants/Common";
const Homepage = () => {
  return (
    <>
      <div className="top-space">
        <List url={`/svc/topstories/v2/home.json?api-key=${NYAPPKEY}`} />
      </div>
    </>
  );
};
export default Homepage;
