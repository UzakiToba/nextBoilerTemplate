import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store as ReduxStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { commonReducer } from '@/redux/common';
import { loggerReducer } from '@/redux/logger';

import { initialState, InitialState } from '@/redux/initialState';

const rootReducer = combineReducers({
  common: commonReducer,
  logger: loggerReducer
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
