import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import '../../src/app/style/_normalize.scss';
import '../../src/app/style/global.scss';

import Routes from './createRoutes';

const render = (AllRoutes) => {
  ReactDOM.render(
    <AppContainer>
      <AllRoutes />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Routes);

if (module.hot)
  module.hot.accept('./createRoutes', () => { render(Routes); });
