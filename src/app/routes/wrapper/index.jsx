import React from 'react';
import Logo from './logo.jsx';
import Navigation from './navigation.jsx';
import FooterContent from './footer-content.jsx';
import styles from './styles/styles.scss';

const Wrapper = ({ children }) => (
  <div className="grid-wrapper">
    <header>
      <Logo />
      <Navigation />
    </header>
    {children}
    <footer>
      <FooterContent />
    </footer>
  </div>
);

export default Wrapper;
