import actionCreatorFactory from 'typescript-fsa';

import * as actionTypes from '@/redux/actionTypes';

const actionCreator = actionCreatorFactory();

export type Tick = {
  light: boolean;
  lastUpdate: number;
};

export const commonActions = {
  tick: actionCreator<Tick>(actionTypes.TICK),
  increment: actionCreator(actionTypes.INCREMENT),
  decrement: actionCreator(actionTypes.DECREMENT),
  reset: actionCreator(actionTypes.RESET)
};
