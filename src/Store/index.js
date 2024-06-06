import { createStore } from "redux";

const initalState = {
  counter: 0,
};

const counterReducer = (state = initalState, action) => {
  if (action.type == "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type == "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type == "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  } else if (action.type == "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  } else return state;
};

const store = createStore(counterReducer);


export default store;