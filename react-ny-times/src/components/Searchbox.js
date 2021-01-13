import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSearchValue, setSearchAlert } from "../actions/SearchActions";
import { setLoading } from "../actions/LoadingActions";

export const Searchbox = () => {
  const [inputVal, setInputVal] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const searchHistory =
    JSON.parse(localStorage.getItem("searchLastHistory")) || [];
  const handleSearch = () => {
    if (inputVal?.length > 0) {
      if (searchHistory?.length === 5) {
        searchHistory.shift();
      }
      searchHistory.push(inputVal);
      dispatch(setSearchValue(inputVal));
      console.log(searchHistory, "searchHistory");
      localStorage.setItem("searchLastHistory", JSON.stringify(searchHistory));
      dispatch(setSearchAlert(false));
      dispatch(setLoading(true));
    } else {
      dispatch(setSearchAlert(true));
    }
    setInputVal("");
    history.push("/search");
  };
  return (
    <Form inline id="searchbox">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onFocus={(e) => setInputVal("")}
      />
      <Button
        variant="outline-primary"
        className="header-search-box"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Form>
  );
};
