import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wrapper from './routes/wrapper';

import Home from './routes/home';
import About from './routes/about';
import Cto from './routes/cto';
import Cv from './routes/cv';
import Travel from './routes/travel';
import TravelPost from './routes/travel/destinations';
import Bucket from './routes/bucket';
import BucketPost from './routes/bucket/done';
import Portfolio from './routes/portfolio';
import Photography from './routes/photography';
import PhotographyPost from './routes/photography/photos';
import Blog from './routes/blog';
import BlogPost from './routes/blog/posts/post';

const createRoutes = () => (
  <Router>
    <Wrapper>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/cto" component={Cto}/>
      <Route path="/cv" component={Cv}/>

      <Route exact path="/travel" component={Travel}/>
      <Route path="/travel/:slug" component={TravelPost}/>

      <Route exact path="/bucket-list" component={Bucket}/>
      <Route path="/bucket-list/:slug" component={BucketPost}/>

      <Route exact path="/portfolio" component={Portfolio}/>

      <Route exact path="/story-blog" component={Blog}/>
      <Route path="/story-blog/:slug" component={BlogPost}/>

      <Route exact path="/photography" component={Photography}/>
      <Route path="/photography/:slug" component={PhotographyPost}/>

    </Wrapper>
  </Router>
);

export default createRoutes;
