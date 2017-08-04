import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import styles from './styles/styles.scss';

const Wrapper = ({ children }) => (
  <div>
    <div className="message">Please update or use a browser that supports modern technologies like CSS Grids.</div>
    <div className="grid-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
);

export default Wrapper;
