import React from 'react';
import { NextPage } from 'next';
import { useSelector, shallowEqual } from 'react-redux';
import { Store } from '@/redux';

type Props = {};

export const Test: NextPage<Props> = (): JSX.Element => {
  const store = useSelector(
    (state: Store) => ({
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
