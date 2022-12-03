import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/url";

// export const fetchArticles = createAsyncThunk(
//   "article/fetchArticles",
//   async (arg, { getState }) => {
//     const page = getState().article.page;
//     console.log(page);
//     const response = await axios.get(`${BASE_URL}/articles?page=${page}`);
//     return response.data.response.docs;
//   }
// );

// export const fetchArticles = createAsyncThunk(
//   "article/fetchArticles",
//   async (arg, { getState }) => {
//     const page = getState().article.page;
//     console.log(page);
//     const response = await axios.get(`${BASE_URL}/articles?page=${page}`);
//     return response.data.response.docs;
//   }
// );

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (arg, { getState }) => {
    const page = getState().article.page;
    const accessToken = localStorage.getItem("userToken");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const response = await axios.get(
      `${BASE_URL}/articles?page=${page}`,
      config
    );
    return response.data.response.docs;
  }
);
