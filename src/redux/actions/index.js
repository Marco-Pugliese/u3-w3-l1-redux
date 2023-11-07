import { useDispatch, useSelector } from "react-redux";

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_TO_FAV = "REMOVE_TO_FAV";
export const GET_FETCH = "GET_FETCH";
export const QUERY = "QUERY";

export const addToFavAction = (payload) => {
  return {
    type: ADD_TO_FAV,
    payload: payload,
  };
};
export const removeToFavAction = (payload) => {
  return {
    type: REMOVE_TO_FAV,
    payload: payload,
  };
};
export const setQueryAction = (payload) => {
  return {
    type: QUERY,
    payload: payload,
  };
};

export const getFetchAction = (query) => {
  return (dispatch) => {
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_FETCH,
          payload: datas.data,
        });
      })
      .catch();
  };
};
