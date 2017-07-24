import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import styles from './styles/styles.scss';

const Wrapper = ({ children }) => (
  <div className="grid-wrapper">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Wrapper;
