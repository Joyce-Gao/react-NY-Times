import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Pagination } from "react-bootstrap";
import { PAGINATIONNUM } from "../constants/Common";
import {
  setPaginationList,
  setPaginationActive,
} from "../actions/PaginationActions";
import "./Pagination.css";

export const PaginationList = ({ totalNum }) => {
  let items = [];
  let pageSize = Math.ceil(totalNum / PAGINATIONNUM);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.Pagination.activePage);
  const [activePage, setActivePage] = useState(active);
  useEffect(() => {
    setActivePage(activePage);
    dispatch(setPaginationList(PAGINATIONNUM, activePage));
  }, [dispatch, activePage]);

  for (let number = 1; number <= pageSize; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
          dispatch(setPaginationActive(number));
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container className="pagination-wrap">
      <Pagination>
        <Pagination.First
          onClick={() => {
            setActivePage(1);
            dispatch(setPaginationActive(1));
          }}
          disabled={active === 1}
        />
        {items}
        <Pagination.Last
          onClick={() => {
            setActivePage(pageSize);
            dispatch(setPaginationActive(pageSize));
          }}
          disabled={active === pageSize}
        />
      </Pagination>
    </Container>
  );
};
