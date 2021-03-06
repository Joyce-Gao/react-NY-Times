import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { NY_APP_KEY } from "../constants/Common";
import { setLoading } from "../actions/LoadingActions";
import { setLocalStorage, removeLocalStorage } from "../util/localStorage";

export const useGetNewsList = (url) => {
  const [list, setList] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const newsList = async () =>
      await axios.get(`${url}`).then((res) => {
        setList(res);
        dispatch(setLoading());
      });
    newsList();
  }, [url, list, dispatch]);
  return list;
};

export const useGetArticleComments = (url) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const commentsList = async () =>
      await axios
        .get(
          `/svc/community/v3/user-content/url.json?api-key=${NY_APP_KEY}&offset=0&url=${url}`
        )
        .then((res) => setComments(res));
    commentsList();
  }, [url, comments]);
  return comments;
};

export const useGetSearchList = (url) => {
  const searchValue = useSelector((status) => status.Search.searchValue);
  const [searchList, setSearchList] = useState(null);
  useEffect(() => {
    const searchList = async () =>
      await axios
        .get(`${url}?q=${searchValue}&api-key=${NY_APP_KEY}`)
        .then((res) => setSearchList(res));
    searchList();
  }, [url, searchValue]);
  return searchList;
};

export const useRefreshToken = () => {
  const token = useSelector((status) => status.User.access_token);
  useEffect(() => {
    setLocalStorage("access_token", token);
  }, [token]);
  if (!token) removeLocalStorage("access_token");
};
