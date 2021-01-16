import React from "react";
import { useSelector } from "react-redux";
import { SearchList } from "../components/SearchList";
import { NY_APP_KEY } from "../constants/Common";

const Search = () => {
  const searchValue = useSelector((status) => status.Search.searchValue);
  return (
    <>
      <div className="top-space">
        <SearchList
          url={`/svc/search/v2/articlesearch.json?q=${searchValue}&api-key=${NY_APP_KEY}`}
        />
      </div>
    </>
  );
};

export default Search;
