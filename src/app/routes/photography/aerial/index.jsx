import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class PhotographyAerial extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    photographyPageContent: [],
  }

  componentDidMount() {
    var photographyPage = database().ref('photography/');
    photographyPage.on('value', (data) => {
      this.setState({ photographyPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.photographyPageContent[nr] && this.state.photographyPageContent[nr][val];
  }

  render() {
    return (
      <div className="photo-content">
        <h2>Aerial</h2>
        <p>Aerial photos</p>
        <PortfolioImage
          img={"../../img/portfolio/aerial/aerial.jpg"}
          alt={"Aerial"}
          descr={"This is an image description"}
        />
        <PortfolioImage
          img={"../img/portfolio/citylife/city.jpg"}
          alt={"Aerial"}
          descr={"This is an image description"}
        />
      </div>
    );
  }
};
