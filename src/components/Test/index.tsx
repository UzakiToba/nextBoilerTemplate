import React from 'react';
import { NextPage } from 'next';
import { useSelector, shallowEqual } from 'react-redux';
import { rootReducerStore } from '@/redux/store';

type Props = {};

export const Test: NextPage<Props> = (): JSX.Element => {
  const store = useSelector(
    (state: rootReducerStore) => ({
      lastUpdate: state.common.lastUpdate,
      light: state.common.light
    }),
    shallowEqual
  );
  return (
    <div>
      <p>{store.lastUpdate}</p>
    </div>
  );
};
