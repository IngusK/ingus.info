import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class CV extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('cv/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.aboutPageContent[nr] && this.state.aboutPageContent[nr][val];
  }

  render() {
    return (
      <div className="cv-content">
        <div className="main-info">
          <img src="../../../../img/Ingus_kruklitis.jpg" alt="Ingus Kruklitis CV background" />
          <div className="description">
            <h2>Ingus Kruklitis</h2>
            <h3>CTO / Front-End developer / Web designer / Travel Photographer</h3>
            <p></p>
          </div>
        </div>
        <div className="cv_info">
          <div>Coding</div>
          <div>Travel</div>
          <div>Work Experience</div>
          <div>Certificates</div>
          <div>Photo stocks</div>
          <div>CTO</div>
        </div>
      </div>
    );
  }
};
