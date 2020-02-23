import { commonInitialState, CommonInitialState } from './common';
import { loggerInitialState, LoggerInitialState } from './logger';

export type InitialState = {
  common: CommonInitialState;
  logger: LoggerInitialState;
};

export const initialState: InitialState = {
  common: commonInitialState,
  logger: loggerInitialState
};
