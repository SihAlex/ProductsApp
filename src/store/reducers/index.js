import { combineReducers } from "redux";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    getPhotosSuccess: (_state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  getPhotosSuccess,
} = counterSlice.actions;

const rootReducer = combineReducers({ counterReducer: counterSlice.reducer });

export default rootReducer;
