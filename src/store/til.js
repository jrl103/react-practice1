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
      // 어떤 변경 작업을 해 !
      state.til_list.push(action.payload.til_data);
    },
    setList: (state,action) => {
      // list 전체를 가져올 거야 ! --> action payload 사용
      // 가지고 온 걸로 state의 til_list를 갈아끼울거야 !
      state.til_list = action.payload // 갈아끼우는 것
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

export const { add, setList, mod, del } = tilSlice.actions;

export default tilSlice.reducer;
