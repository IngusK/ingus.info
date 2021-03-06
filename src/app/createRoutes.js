import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Wrapper from './routes/wrapper';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './routes/home';
import About from './routes/about';
import Cto from './routes/cto';
import Cv from './routes/cv';

import Travel from './routes/travel';
import TravelPost from './routes/travel/destinations';

import Bucket from './routes/bucket';
import BucketPost from './routes/bucket/done';

import Portfolio from './routes/portfolio';

import Store from './routes/store';
import StorePreset from './routes/store/photos';

import Photography from './routes/photography';
import PhotographyPost from './routes/photography/photos';

import Blog from './routes/blog';
import BlogPost from './routes/blog/posts/post';

import NoMatch from './routes/404';

const createRoutes = () => (
  <Router>
    <ScrollToTop>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/cto" component={Cto}/>
          <Route path="/cv" component={Cv}/>

          <Route exact path="/map" component={Travel}/>
          <Route path="/map/:slug" component={TravelPost}/>

          <Route exact path="/bucket-list" component={Bucket}/>
          <Route path="/bucket-list/:slug" component={BucketPost}/>

          <Route exact path="/portfolio" component={Portfolio}/>

          <Route exact path="/store" component={Store}/>
          <Route path="/store/:slug" component={StorePreset}/>

          <Route exact path="/photography" component={Photography}/>
          <Route path="/photography/:slug" component={PhotographyPost}/>

          <Route exact path="/story-blog" component={Blog}/>
          <Route exact path="/story-blog/page=:page?" component={Blog}/>
          <Route path="/story-blog/:slug" component={BlogPost}/>

          <Route component={NoMatch}/>
        </Switch>
      </Wrapper>
    </ScrollToTop>
  </Router>

);

export default createRoutes;
