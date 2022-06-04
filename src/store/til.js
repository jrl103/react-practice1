// slice 만들기

import { createSlice } from "@reduxjs/toolkit";

const tilSlice = createSlice({
  name: "til",
  initialState: {
    til_list: [],
  },
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.til_list.push(action.payload.til_data);
    },
    mod: (state, action) => {
      const idx = state.til_list.findIndex((t) => {
        return t.id === action.payload.til_data.id;
      });

      state.til_list[idx] = action.payload.til_data;
    },
    del: (state, action) => {
      const idx = state.til_list.findIndex((t) => {
        return t.id === action.payload.til_data.id;
      });

      state.til_list.pop(idx, 1);
    },
  },
});

export const { add, mod, del } = tilSlice.actions;

export default tilSlice.reducer;
