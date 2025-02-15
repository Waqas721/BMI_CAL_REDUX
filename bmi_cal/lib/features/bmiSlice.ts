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
      if (state.height > 0 && state.weight > 0) {
        let heightInMeters = state.height / 100;
        let bmiValue = state.weight / (heightInMeters * heightInMeters);
        state.bmi = parseFloat(bmiValue.toFixed(2));

        if (bmiValue < 18.5) state.category = "Underweight";
        else if (bmiValue < 24.9) state.category = "Normal weight";
        else if (bmiValue < 29.9) state.category = "Overweight";
        else state.category = "Obese";
      } else {
        state.bmi = null;
        state.category = "";
      }
    },
  },
});

export const { setWeight, setHeight, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
