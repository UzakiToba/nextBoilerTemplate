import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type InitialState = {
  lastUpdate: number;
  light: boolean;
  count: number;
};

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

const reducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light
      };
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    case 'RESET':
      return {
        ...state,
        count: initialState.count
      };
    default:
      return state;
  }
};

export const initializeStore = (
  preloadedState = initialState
): Store<InitialState, any> => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
