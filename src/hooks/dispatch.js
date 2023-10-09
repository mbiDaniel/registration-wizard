import { useReducer } from "react";

export default function useDispatch(initialState = {}) {
  const reducer = (prevState, action) => ({ ...prevState, ...action });
  return useReducer(reducer, initialState);
}
