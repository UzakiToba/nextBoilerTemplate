import React from 'react';
import { NextPage } from 'next';
import { useSelector, shallowEqual } from 'react-redux';
import { InitialState as Store } from '@/store';

type Props = {};

export const Test: NextPage<Props> = (): JSX.Element => {
  const store = useSelector(
    (state: Store) => ({
      lastUpdate: state.lastUpdate,
      light: state.light
    }),
    shallowEqual
  );
  return (
    <div>
      <p>{store.lastUpdate}</p>
    </div>
  );
};
