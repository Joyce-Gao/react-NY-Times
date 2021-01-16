import React from "react";
import { useDispatch } from "react-redux";
import { List } from "../components/List";
import { NY_APP_KEY } from "../constants/Common";
import { setPaginationActive } from "../actions/PaginationActions";

const Science = () => {
  const dispatch = useDispatch();
  dispatch(setPaginationActive(1));
  return (
    <>
      <div className="top-space">
        <List url={`/svc/topstories/v2/science.json?api-key=${NY_APP_KEY}`} />
      </div>
    </>
  );
};

export default Science;
