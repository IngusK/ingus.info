import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from '../styles.scss';

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
        <h2>{this.getValue('travel', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('travel', 1)}} />
        <PortfolioImage
          img={"../../img/portfolio/aerial/riga.jpg"}
          alt={this.getValue('travel', 2)}
          descr={this.getValue('travel', 2)}
        />
        <PortfolioImage
          img={"../img/portfolio/aerial/la_sunset.jpg"}
          alt={this.getValue('travel', 4)}
          descr={this.getValue('travel', 4)}
        />
        <PortfolioImage
          img={"../../img/portfolio/aerial/hollywood.jpg"}
          alt={this.getValue('travel', 6)}
          descr={this.getValue('travel', 6)}
        />
        <PortfolioImage
          img={"../img/portfolio/aerial/death_valley.jpg"}
          alt={this.getValue('travel', 8)}
          descr={this.getValue('travel', 8)}
        />
        <PortfolioImage
          img={"../../img/portfolio/aerial/horse.jpg"}
          alt={this.getValue('travel', 10)}
          descr={this.getValue('travel', 10)}
        />
      </div>
    );
  }
};
