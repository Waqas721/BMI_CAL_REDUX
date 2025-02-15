import { createSlice } from "@reduxjs/toolkit";

interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
