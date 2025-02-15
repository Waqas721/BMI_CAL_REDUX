import { useAppSelector, useAppDispatch } from "@/lib/hooks"; 
import { increment } from "@/lib/createAppSlice"; // 

export const Counter = () => {
  const dispatch = useAppDispatch();
  //const count = useAppSelector((state) => state.counter.value); // Ensure 'counter' exists

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
