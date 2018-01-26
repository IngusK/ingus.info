import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class TravelPage extends React.PureComponent {

  state = {
    travelPageContent: [],
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    var travelPage = database().ref('travel/').orderByChild('slug').equalTo(params.slug);

    travelPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ travelPageContent: post[elementKey] });
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
