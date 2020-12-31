import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../module";
import { increase, decrease, increase_by } from "../module/counter";

const useCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increase_by(diff)),
    [dispatch]
  );
  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
};

export default useCounter;
