const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increase_by = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

//ReturnType 은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입입니다
type CounterActions =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increase_by>;

type CounterState = { count: number };

const initState: CounterState = { count: 0 };

//Reducer
const counterReducer = (
  state: CounterState = initState,
  action: CounterActions
) => {
  switch (action.type) {
    case INCREASE: {
      return { count: state.count + 1 };
    }
    case DECREASE: {
      return { count: state.count - 1 };
    }
    case INCREASE_BY: {
      return { count: state.count + action.payload };
    }
    default:
      return state;
  }
};

export default counterReducer;
