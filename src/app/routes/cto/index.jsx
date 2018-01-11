import React from 'react';
import {database} from "firebase";

import style from './styles.scss';

export default class CTO extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    CtoContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('cto/');
    aboutPage.on('value', (data) => {
      this.setState({ CtoContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.CtoContent[nr] && this.state.CtoContent[nr][val];
  }

  render() {
    return (
      <div className="cto-content">
        <div className="title">
          <h2>{this.getValue('header', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('description', 0)}} />
        </div>
        <div className="description">
          <div>
            <a href="https://weddenly.com" target="_blank"><img src="../img/logos/weddenly-logo.png" alt="Weddenly website builder" /></a>
            <p dangerouslySetInnerHTML={{__html:this.getValue('projects', 0)}} />
          </div>
          <div>
            <a href="https://triptemptation.com" target="_blank"><img src="../img/logos/TT-logo.png" alt="TripTemptation website builder" /></a>
            <p dangerouslySetInnerHTML={{__html:this.getValue('projects', 1)}} />
          </div>
          <div>
            <a href="https://www.shutterstock.com/g/IngusKruklitis?rid=3325097&utm_medium=email&utm_source=ctrbreferral-link" target="_blank"><img src="../img/logos/shutterstock-logo.jpg" alt="Ingus Kruklitis Shutterstock photo stocks" /></a>
            <p dangerouslySetInnerHTML={{__html:this.getValue('projects', 2)}} />
          </div>
        </div>
      </div>
    );
  }
};
