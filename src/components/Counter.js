import classes from "./Counter.module.css";
import { useSelector,useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
const dispatch=useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
    dispatch({type:'INCREMENT'});
  };
  const decrementHandler=()=>{
    dispatch({type:'DECREMENT'});
  };
  const increment5Handler=()=>{
    dispatch({type:'INCREMENT5'});
  };
  const decrement5Handler=()=>{
    dispatch({type:"DECREMENT5"});
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler} >Decrement</button>
        <button onClick={increment5Handler}>Increment By 5</button>
        <button onClick={decrement5Handler} >Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
