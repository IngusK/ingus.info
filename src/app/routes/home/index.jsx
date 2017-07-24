import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default () => (
  <div className="main-content">
    <h1><span>Hey there!</span><br/>Since you are here, you might want to know that I design and code great websites and stuff.</h1>
    <div className="top-slider">
      <div className="slider-description">
        <h3>January 21, 2017</h3>
        <Link to=''><h2>India with<br/>Beautiful Destinations</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="slider-photo">
        <Link to=''><img src="../img/sample.jpg" alt="Travel photo" /></Link>
      </div>
    </div>
    <div className="posts">
      <div className="post-1">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="post-2">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="post-3">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="post-4">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="post-5">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="post-6">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="post-7">
        <Link to=''><img src="../img/sample2.jpg" alt="Travel photo" /></Link>
        <h3>January 21, 2017</h3>
        <Link to=''><h2>Dubai</h2></Link>
        <h5>Travel adventures</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
);
