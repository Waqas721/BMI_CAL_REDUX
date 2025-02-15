import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BMIState {
  weight: number;
  height: number;
  bmi: number | null;
  category: string;
}

const initialState: BMIState = {
  weight: 0,
  height: 0,
  bmi: null,
  category: "",
};

const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    setWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    calculateBMI: (state) => {
      if (state.weight > 0 && state.height > 0) {
        const heightInMeters = state.height / 100;
        state.bmi = parseFloat((state.weight / (heightInMeters * heightInMeters)).toFixed(2));

        if (state.bmi < 18.5) {
          state.category = "Underweight";
        } else if (state.bmi < 24.9) {
          state.category = "Normal weight";
        } else if (state.bmi < 29.9) {
          state.category = "Overweight";
        } else {
          state.category = "Obese";
        }
      }
    },
  },
});

export const { setWeight, setHeight, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
