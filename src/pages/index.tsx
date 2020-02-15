import React from 'react';
import { useDispatch } from 'react-redux';
import { withRedux } from '../lib/redux';
import useInterval from '../lib/useInterval';
import { NextPage, NextPageContext } from 'next';
import { commonActions } from '@/redux/common/actions';

import { Test } from '@/components/Test';

type Props = {
  userAgent?: string;
};

const Index: NextPage<Props> = (props): JSX.Element => {
  console.log(props);
  const { userAgent } = props;
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch(
      commonActions.tick({
        light: true,
        lastUpdate: Date.now()
      })
    );
  }, 1000);
  return (
    <div>
      <Test />
      <p>agent: {userAgent || 'none'}</p>
      <p>{process.env._HOGE}</p>
    </div>
  );
};

Index.getInitialProps = async (
  ctx: NextPageContext & { reduxStore: any }
): Promise<Props> => {
  const { req, reduxStore } = ctx;
  const { dispatch } = reduxStore;
  dispatch(
    commonActions.tick({
      light: typeof window === 'object',
      lastUpdate: Date.now()
    })
  );
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default withRedux(Index);
