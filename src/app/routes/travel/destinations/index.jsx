import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class TravelPage extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    travelPageContent: [],
  }

  componentDidMount() {
    var travelPage = database().ref('travel/');
    travelPage.on('value', (data) => {
      this.setState({ travelPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.travelPageContent[nr] && this.state.travelPageContent[nr][val];
  }

  render() {
    const { travelPageContent } = this.state;
    return (
      <div className="photo-content">
        <h2>{travelPageContent.title}</h2>
        <PortfolioImage
          img={this.getValue('img', 0)}
          alt={this.getValue('name', 0)}
          descr={this.getValue('descr', 0)}
        />
      </div>
    );
  }
};
