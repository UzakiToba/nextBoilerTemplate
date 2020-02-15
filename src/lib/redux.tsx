import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore, InitializeStore } from '@/redux/store';
import App, { AppContext } from 'next/app';
import { InitialState } from '@/redux/initialState';

export const withRedux = (PageComponent: any, { ssr = true } = {}): any => {
  const WithRedux = ({
    initialReduxState,
    ...props
  }: {
    [key: string]: any;
  }): JSX.Element => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };
  console.log({ WithRedux });
  // _appで使用してはいけない
  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc =
      PageComponent === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  }

  // 開発時に正しいdisplayNameを設定する
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    WithRedux.displayName = `withRedux(${displayName})`;
  }
  console.log({ WithRedux });
  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (
      context: AppContext & { reduxStore: InitializeStore }
    ): Promise<any> => {
      // initialStateとして「undefined」を使用してストアを取得または作成します
      // これにより、カスタムのデフォルトinitialStateを設定できます
      const reduxStore = getOrInitializeStore();

      // ページのgetInitialPropsにストアを提供する
      const localContext = context;
      localContext.reduxStore = reduxStore;

      // HOCed PageComponentからgetInitialPropsを実行します
      const pageProps =
        typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(localContext)
          : {};
      return {
        ...pageProps,
        initialReduxState: reduxStore.getState()
      };
    };
  }
  console.log({ WithRedux });
  return WithRedux;
};

let reduxStore: InitializeStore;
const getOrInitializeStore = (initialState?: InitialState): InitializeStore => {
  // サーバーの場合は常に新しいストアを作成します。そうしないと、リクエスト間で状態が共有されます
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }
  // クライアントで使用できない場合はストアを作成し、ウィンドウオブジェクトに設定します
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }
  return reduxStore;
};
