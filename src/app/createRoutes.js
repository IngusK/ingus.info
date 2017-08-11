import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wrapper from './routes/wrapper/index.jsx';

import Home from './routes/home/index.jsx';
import About from './routes/about/index.jsx';
import Cto from './routes/cto/index.jsx';
import Cv from './routes/cv/index.jsx';

const createRoutes = () => (
  <Router>
    <Wrapper>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/cto" component={Cto}/>
      <Route path="/cv" component={Cv}/>
    </Wrapper>
  </Router>
);

export default createRoutes;
