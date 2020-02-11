import React from 'react';
import { NextPage, NextPageContext } from 'next';

import { Test } from '@/components/Test';

type Props = {
  userAgent?: string;
};

const Index: NextPage<Props> = ({ userAgent }): JSX.Element => {
  return (
    <div>
      <Test />
      <p>agent: {userAgent || 'none'}</p>
      <p>{process.env._HOGE}</p>
    </div>
  );
};

Index.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
  const { req } = ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Index;
