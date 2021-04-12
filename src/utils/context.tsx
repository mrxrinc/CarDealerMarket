import React, {
  useReducer,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import apis from 'utils/apis';
import types from 'constants/actionTypes';
import {ActionType} from 'constants/types';

interface Props {
  children: ReactNode;
}
interface State {
  user: {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    email: string | null;
  };
}

const INITIAL_STATE = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    email: null,
  },
};

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const reducer = (state: State, {type, payload}: ActionType) => {
  switch (type) {
    case types.SET_USER:
      return {...state, user: payload};
    default:
      throw new Error();
  }
};
const AppProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      console.log('jwt', jwt);
      // if user is not logged in
      if (!jwt) return;
      await apis.getCurrentUser(dispatch);
    } catch (e) {
      console.log('e: ', e);
      Object.keys(e).forEach((key) => {
        console.log(key, e[key]);
      });
    }
  };

  console.log('state.user', state.user);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
