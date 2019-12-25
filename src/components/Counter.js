import React from "react";
import PropTypes from "prop-types";

const Counter = ({
  counter,
  countdown,
  onIncrement,
  onDecrement,
  onIncrementIfOdd,
  onIncrementAsync,
  onCancelIncrementAsync
}) => (
  <div>
    Clicked: {counter} times <button onClick={onIncrement}>+</button>{" "}
    <button onClick={onDecrement}>-</button>{" "}
    <button onClick={onIncrementIfOdd}>Increment if odd</button>{" "}
    <button
      onClick={
        countdown === 0
          ? () => {
              onIncrementAsync(5);
            }
          : onCancelIncrementAsync
      }
      style={{ color: countdown ? "red" : "black" }}
    >
      {countdown > 0 ? `Cancel increment (${countdown})` : "increment after 5s"}
    </button>
  </div>
);

Counter.propTypes = {
  // dispatch actions
  counter: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired
};

export default Counter;
