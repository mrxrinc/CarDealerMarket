import React, {useReducer, createContext, ReactNode} from 'react';
import types from 'constants/actionTypes';

interface Props {
  children: ReactNode;
}
interface State {
  userId: string | null;
}
interface Action {
  type: string;
  payload: any;
}
const INITIAL_STATE = {
  userId: null,
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const reducer = (state: State, {type, payload}: Action) => {
  switch (type) {
    case types.SET_USER_ID:
      return {...state, userId: payload};
    default:
      throw new Error();
  }
};
const AppProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
