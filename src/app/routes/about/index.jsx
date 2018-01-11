import React from 'react';
import {database} from "firebase";

import style from './styles.scss';

export default class About extends React.PureComponent {

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('about/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.aboutPageContent[nr] && this.state.aboutPageContent[nr][val];
  }

  render() {
    return (
      <div className="about-content">
        <div className="title">
          <h2>{this.getValue('header', 0)}</h2>
        </div>
        <div className="description">
          <h2>{this.getValue('bio', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('bio', 1)}} />
          <h2>{this.getValue('skills', 0)}</h2>
          <ul>
            <li dangerouslySetInnerHTML={{__html:this.getValue('skills', 1)}} />
            <li dangerouslySetInnerHTML={{__html:this.getValue('skills', 2)}} />
            <li dangerouslySetInnerHTML={{__html:this.getValue('skills', 3)}} />
          </ul>
          <h2>{this.getValue('sports', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('sports', 1)}} />
          <h2>{this.getValue('contacts', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('contacts', 1)}} />
          <div className="email-container">
            <h3>{this.getValue('contacts', 2)}</h3>
          </div>
          <p dangerouslySetInnerHTML={{__html:this.getValue('contacts', 3)}} />
        </div>

      </div>
    );
  }
};
