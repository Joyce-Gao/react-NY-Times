import React from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SearchItem } from "./SearchItem";
import { useGetNewsList } from "../util/Helper";
import { PaginationList } from "./Pagination";
import {
  ALERTNOTFOUND,
  ALERTSEARCHTEXT,
  SEARCHHISTORYTITLE,
} from "../constants/Common";
import "./SearchList.css";

export const SearchList = ({ url }) => {
  let newsList = useGetNewsList(url);
  const isLoading = useSelector((state) => state.Loading.isLoading);
  const isAlert = useSelector((state) => state.Search.searchAlert);
  const pageSize = useSelector((state) => state.Pagination.pageSize);
  const activePage = useSelector((state) => state.Pagination.activePage);
  const endSize = pageSize * activePage;
  const startSize = endSize - pageSize;
  let listData = newsList?.data?.response?.docs || [];
  const newsListItem = listData.map(
    (item, index) =>
      index >= startSize &&
      index <= endSize && <SearchItem key={index} {...item} />
  );
  const newsLength = listData.length;
  const searchHistory = JSON.parse(localStorage.getItem("searchLastHistory"));
  const searchHistoryItem = searchHistory?.map((item, key) => (
    <span key={key} className="search-history-item">
      {item}
    </span>
  ));
  return (
    <Container>
      {isLoading && (
        <div className="loading-wrap">
          <Spinner animation="border" variant="primary" className="loading" />
        </div>
      )}
      {!isLoading && (
        <div>
          {!!searchHistory?.length && (
            <div className="search-last-history">
              <span>{SEARCHHISTORYTITLE}</span>
              {searchHistoryItem}
            </div>
          )}
          {isAlert && <Alert variant="danger">{ALERTSEARCHTEXT}</Alert>}
          {!isAlert && (
            <div>
              {!newsLength && <Alert variant="danger">{ALERTNOTFOUND}</Alert>}
              {!!newsLength && (
                <>
                  <div>total: {newsLength}</div>
                  {newsListItem}
                  <PaginationList totalNum={newsLength} />
                </>
              )}
            </div>
          )}
        </div>
      )}
    </Container>
  );
};
