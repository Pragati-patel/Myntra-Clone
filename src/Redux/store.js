import { configureStore } from "@reduxjs/toolkit";
// import BrandSlice from "./BrandSlice";
// import CartSlice from "./CartSlice";
import ProductSlice from "./slice";
// import UserSlice from "./UserSlice";
export const store = configureStore({
  reducer: {
    product: ProductSlice,
    // brand:BrandSlice,
    // user:UserSlice,
    // cart:CartSlice
  },
});
