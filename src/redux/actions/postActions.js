import axios from "axios";
import { getPost } from "../../../../blockchain-backend/controllers/post";
import { ACTION_TYPES } from "./actionTypes";
import { setError } from "./commonActions";

export const getPosts = (postResponse) => {
    return {
      type: ACTION_TYPES.GET_PROFILE,
      payload: postResponse,
    };
  };
  
  export const getPostsRequest = () => {
      
    const headers = {
    };
    return (dispatch) => {
      axios({
        method: "post",
        baseURL: "http://localhost:4000",
        url: "user/getPosts",
        headers,
        data: {},
        withCredentials: false,
      })
        .then((response) => {
          dispatch(getPost(response.data.payload));
        })
        .catch((error) => {
          dispatch(setError(error.response.data));
        });
    };
  };