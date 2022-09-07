import { combineReducers } from "@reduxjs/toolkit";
import cars from "./cars";
// import spaces from "./spaces";

export const combinedReducer = () =>
  combineReducers({
    cars,
    // spaces
  });
