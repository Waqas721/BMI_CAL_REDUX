"use client";

import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { setWeight, setHeight, calculateBMI } from "../lib/features/bmiSlice";
import styles from "./styles/layout.module.css";

export default function Home() {
  const dispatch = useAppDispatch();
  const { weight, height, bmi, category } = useAppSelector((state) => state.bmi);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(calculateBMI());
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>Weight (kg):</label>
        <input
          type="number"
          step="0.01"
          value={weight || ""}
          onChange={(e) => dispatch(setWeight(parseFloat(e.target.value)))}
          required
        />

        <label>Height (cm):</label>
        <input
          type="number"
          step="0.01"
          value={height || ""}
          onChange={(e) => dispatch(setHeight(parseFloat(e.target.value)))}
          required
        />

        <button type="submit">Calculate BMI</button>
      </form>

      {bmi !== null && (
        <div className="result">
          <h3>Your BMI is {bmi}</h3>
          <p>{category}</p>
        </div>
      )}
    </div>
  );
}
