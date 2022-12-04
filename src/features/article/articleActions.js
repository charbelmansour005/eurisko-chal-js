import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../services/url";

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (arg, { getState }) => {
    const page = getState().article.page;
    const response = await axios.get(`${BASE_URL}/articles?page=${page}`);
    return response.data.response.docs;
  }
);
