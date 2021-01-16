import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NewsItem } from "./NewsItem";
import { useGetNewsList } from "../util/Helper";
import { PaginationList } from "../components/Pagination";

export const List = ({ url }) => {
  let newsList = useGetNewsList(url);
  const isLoading = useSelector((state) => state.Loading.isLoading);
  const pageSize = useSelector((state) => state.Pagination.pageSize);
  const activePage = useSelector((state) => state.Pagination.activePage);
  const endSize = pageSize * activePage;
  const startSize = endSize - pageSize;
  let listData = newsList?.data?.results || [];
  const newsListItem = listData.map(
    (item, index) =>
      index >= startSize &&
      index <= endSize && <NewsItem key={index} {...item} />
  );
  const newsLength = listData.length;
  return (
    <Container>
      {isLoading && (
        <div className="loading-wrap">
          <Spinner animation="border" variant="primary" className="loading" />
        </div>
      )}
      {!!newsLength && (
        <div>
          <div>total: {newsLength}</div>
          {newsListItem}
          <PaginationList totalNum={newsLength} />
        </div>
      )}
    </Container>
  );
};
