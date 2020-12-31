import React from "react";

interface IProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

const AppPrsenter = (props: IProps) => {
  const { onDecrease, onIncrease, onIncreaseBy, count } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div> {count}</div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => onIncreaseBy(+5)}> +5 </button>
      </div>
    </div>
  );
};

export default AppPrsenter;
