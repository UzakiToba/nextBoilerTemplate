import React from 'react';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { commonActions, Store } from '@/redux';

export const UpdateCount: NextPage = (): JSX.Element => {
  const store = useSelector((state: Store) => ({
    count: state.common.count
  }));
  const dispatch = useDispatch();

  const click = (): void => {
    dispatch(commonActions.increment());
  };

  return (
    <div>
      <p>count: {store.count}</p>
      <button type="button" onClick={click}>
        up
      </button>
    </div>
  );
};
