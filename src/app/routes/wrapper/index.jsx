import React from 'react';
import style from './style.scss';

const Wrapper = ({ children }) => (
  <div className="grid-wrapper">
    <header>Header</header>
    {children}
    <footer>Footer</footer>
  </div>
);

export default Wrapper;
