import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { commonActions, Tick } from './actions';
import { initialState } from '@/redux/initialState';
import { CommonInitialState as State } from '@/redux/initialState/common';

export const commonReducer = reducerWithInitialState(initialState.common)
  .case(
    commonActions.tick,
    (state: State, payload: Tick): State => {
      return {
        ...state,
        lastUpdate: payload.lastUpdate,
        light: !!payload.light
      };
    }
  )
  .case(
    commonActions.increment,
    (state: State): State => {
      return {
        ...state,
        count: state.count + 1
      };
    }
  )
  .case(
    commonActions.decrement,
    (state: State): State => {
      return {
        ...state,
        count: state.count - 1
      };
    }
  )
  .case(
    commonActions.reset,
    (state: State): State => {
      return {
        ...state,
        count: initialState.common.count
      };
    }
  );
