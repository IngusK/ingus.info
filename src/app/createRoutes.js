import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wrapper from './routes/wrapper/index.jsx';
import Home from './routes/home/index.jsx';
import About from './routes/about/index.jsx';

const createRoutes = () => (
  <Router>
    <Wrapper>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Wrapper>
  </Router>
);

export default createRoutes;
