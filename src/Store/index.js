import { createStore } from "redux";

const initalState = {
  counter: 0,
};

const counterReducer = (state = initalState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === "INCREMENT5") {
    return {
      counter: state.counter + 5,
    };
  } else if (action.type === "DECREMENT5") {
    return {
      counter: state.counter - 5,
    };
  } else return state;
};

const store = createStore(counterReducer);

export default store;
