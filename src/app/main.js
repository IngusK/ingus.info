import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import '../../src/app/styles/_normalize.scss';
import '../../src/app/styles/global.scss';

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
