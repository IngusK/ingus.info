import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wrapper from './routes/wrapper/index.jsx';

import Home from './routes/home/index.jsx';
import About from './routes/about/index.jsx';
import Travel from './routes/travel/index.jsx';

const createRoutes = () => (
  <Router>
    <Wrapper>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/travel" component={Travel}/>
    </Wrapper>
  </Router>
);

export default createRoutes;
