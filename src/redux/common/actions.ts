import actionCreatorFactory from 'typescript-fsa';

import * as actionTypes from '@/redux/actionTypes';

const actionCreator = actionCreatorFactory();

export const commonActions = {
  tick: actionCreator<any>('TICK'),
  increment: actionCreator<any>('INCREMENT'),
  decrement: actionCreator<any>('DECREMENT'),
  reset: actionCreator<any>('RESET')
};
