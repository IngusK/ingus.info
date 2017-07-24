import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles/styles-header.scss';

export default () => (
  <header>
    <div className="logo">
      <Link to='/'><h1>Ingus<span>.info</span></h1></Link>
      <h2>Travel. Photography. Coding</h2>
    </div>
    <nav>
      <ul className="nav-large">
        <li><Link to='/travel'>Travel</Link></li>
        <li><Link to='/story-blog'>Story Blog</Link></li>
        <li><Link to='/photography'>Photography</Link></li>
      </ul>
      <ul className="nav-small">
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
        <li><Link to='/cto'>CTO</Link></li>
        <li><Link to='/cv'>CV</Link></li>
      </ul>
    </nav>
  </header>
);
