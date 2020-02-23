import React from 'react';
import { NextPage } from 'next';
import { withRedux } from '@/lib/redux';

const Hoge: NextPage<{}> = (): JSX.Element => {
  return <div>hoge</div>;
};

export default withRedux(Hoge);
