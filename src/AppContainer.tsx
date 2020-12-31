import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppPrsenter from "./AppPrsenter";
import { RootState } from "./module";
import { decrease, increase, increase_by } from "./module/counter";

const AppContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increase_by(diff)),
    [dispatch]
  );
  return (
    <AppPrsenter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

export default AppContainer;
