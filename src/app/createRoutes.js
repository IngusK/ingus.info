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
import Photography from './routes/photography';
import PhotographyAerial from './routes/photography/aerial';
import PhotographyCity from './routes/photography/city';
import PhotographyPeople from './routes/photography/people';
import PhotographyNature from './routes/photography/nature';
import PhotographyTravel from './routes/photography/travel';
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

      <Route path="/bucket-list" component={Bucket}/>
      <Route exact path="/blog" component={Blog}/>
      <Route path="/blog/:slug" component={BlogPost}/>

      <Route exact path="/photography" component={Photography}/>
      <Route path="/photography/aerial" component={PhotographyAerial}/>
      <Route path="/photography/city" component={PhotographyCity}/>
      <Route path="/photography/people" component={PhotographyPeople}/>
      <Route path="/photography/nature" component={PhotographyNature}/>
      <Route path="/photography/travel" component={PhotographyTravel}/>
    </Wrapper>
  </Router>
);

export default createRoutes;
