import {
  CREATE_POST,
  FETCH_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchPost() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({
          type: FETCH_POST,
          payload: json,
        });
        dispatch(hideLoader());
      }, 2500);
    } catch (error) {
      dispatch(showAlert("Что-то пошло не так"));
      dispatch(hideLoader());
    }
  };
}
