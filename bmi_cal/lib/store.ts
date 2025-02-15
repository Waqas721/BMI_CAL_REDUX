import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "./features/bmiSlice"; // ✅ Correct import

export const store = configureStore({
  reducer: {
    bmi: bmiReducer, // ✅ Ensure this exists
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
