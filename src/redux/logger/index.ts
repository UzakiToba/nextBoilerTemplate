import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { initialState } from '@/redux/initialState';
import { LoggerInitialState as State } from '@/redux/initialState/logger';

export const loggerReducer = reducerWithInitialState(
  initialState.logger
).default(
  (state: State, { type }): State => {
    return {
      prevEventName: state.eventName,
      prevLastUpdate: state.lastUpdate,
      eventName: type,
      lastUpdate: Date.now()
    };
  }
);
