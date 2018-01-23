import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class TravelPage extends React.PureComponent {

  state = {
    travelPageContent: [],
  }

  // componentDidMount() {
  //   var travelPage = database().ref('travel/');
  //   travelPage.on('value', (data) => {
  //     this.setState({ travelPageContent: data.val() });
  //   });
  // };

  componentDidMount() {
    var travelPage = database().ref('travel/');
    travelPage.on('value', (data) => {
      const post = data.val();
      this.setState({ travelPageContent: post[0] });
    });
  };

  render() {
    const { travelPageContent } = this.state;
    return (
      <div className="photo-content">
        <h2>{travelPageContent.name}</h2>
        <PortfolioImage
          img={travelPageContent.img}
          alt={travelPageContent.name}
          descr={travelPageContent.descr}
        />
      </div>
    );
  }
};
