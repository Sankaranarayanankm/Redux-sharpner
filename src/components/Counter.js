import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // alert("toggled");
    dispatch({ type: "TOGGLE" });
  };
  console.log(toggle);

  const incrementHandler = (value) => {
    dispatch({ type: "INCREMENT", amount: value });
  };
  const decrementHandler = (value) => {
    dispatch({ type: "DECREMENT", amount: value });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
        <button onClick={() => incrementHandler(5)}>Increment By 5</button>
        <button onClick={() => decrementHandler(5)}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
