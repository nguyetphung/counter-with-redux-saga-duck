import { connect } from "react-redux";

import Counter from "../components/Counter";
import { counterActions } from "../store/ducks/counter";

const mapStateToProps = state => {
  return {
    ...state.counterReducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch(counterActions.increment());
    },
    onDecrement: () => {
      dispatch(counterActions.decrement());
    },
    onIncrementIfOdd: () => {
      dispatch(counterActions.incrementIfOdd());
    },
    onIncrementAsync: value => {
      dispatch(counterActions.incrementAsync(value));
    },
    onCancelIncrementAsync: () => {
      dispatch(counterActions.cancelIncrementAsync());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
