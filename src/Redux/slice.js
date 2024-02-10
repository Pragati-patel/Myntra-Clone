import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let headers = {
  authorization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJfaWQiOiI2NWM3MWE4MzRmM2NkYjAyZWY1ZjZjOGQiLCJlbWFpbCI6ImNoZXRhbm1hbHZpeWE5MjRAZ21haWwuY29tIiwibmFtZSI6InRlc3QifSwiaWF0IjoxNzA3NTQ3ODMxLCJleHAiOjE3MDc5Nzk4MzF9.UyM_JEyACIhUi2TsZIk_qkWpNQ66kPC-nTk1aFXouTM",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    let response = await axios.get(
      "http://52.90.114.34:3000/category/viewCategory",
      { headers: headers },
    );

    return response.data;
  },
);

const masterSlice = createSlice({
  name: "product",
  initialState: {
    value: {
      productList: [],
      isLoading: false,
    },
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.value.isLoading = true;
      // console.log("hii")
      // debugger;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.value.productList = action.payload;
      state.value.isLoading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.value.productList = [];
      state.value.error = "Oops! something went wrong";
    });
  },
});

export default masterSlice.reducer;
