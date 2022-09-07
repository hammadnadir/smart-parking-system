import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import { combinedReducer } from "../redux/rootReducer"; 

export const store = configureStore({
  reducer: combinedReducer(),
})

// export const wrapper = createWrapper(store, {
//   debug: true,
// });

