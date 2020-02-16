import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store as ReduxStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { commonReducer } from '@/redux/common';

import { initialState, InitialState } from '@/redux/initialState';

const rootReducer = combineReducers({
  common: commonReducer
});

export type Store = ReturnType<typeof rootReducer>;

const initializeStore = (
  preloadedState = initialState
): ReduxStore<InitialState, any> => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};

export type InitializeStore = ReturnType<typeof initializeStore>;
export { initializeStore };
