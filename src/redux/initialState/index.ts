import { commonInitialState, CommonInitialState } from './common';

export type InitialState = {
  common: CommonInitialState;
};

export const initialState: InitialState = {
  common: commonInitialState
};
