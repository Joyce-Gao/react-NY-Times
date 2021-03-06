import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSearchValue, setSearchAlert } from "../actions/SearchActions";
import { setLoading } from "../actions/LoadingActions";
import { setLocalStorage } from "../util/localStorage";

export const SearchBox = () => {
  const [inputVal, setInputVal] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const searchHistory =
    JSON.parse(localStorage.getItem("searchLastHistory")) || [];
  const handleSearch = () => {
    if (inputVal?.length > 0) {
      if (searchHistory?.indexOf(inputVal) === -1) {
        if (searchHistory?.length === 5) {
          searchHistory.shift();
        }
        searchHistory.push(inputVal);
      }
      dispatch(setSearchValue(inputVal));
      setLocalStorage("searchLastHistory", searchHistory);
      dispatch(setSearchAlert(false));
      dispatch(setLoading(true));
    } else {
      dispatch(setSearchAlert(true));
    }
    history.push("/search");
  };
  return (
    <Form inline id="searchBox">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
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
