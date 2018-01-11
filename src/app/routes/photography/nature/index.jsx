import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
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
        <h2>{this.getValue('nature', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('nature', 1)}} />
        <PortfolioImage
          img={this.getValue('aerial', 3)}
          alt={this.getValue('aerial', 2)}
          descr={this.getValue('aerial', 2)}
        />
        <PortfolioImage
          img={this.getValue('aerial', 5)}
          alt={this.getValue('aerial', 4)}
          descr={this.getValue('aerial', 4)}
        />
        <PortfolioImage
          img={this.getValue('aerial', 7)}
          alt={this.getValue('aerial', 6)}
          descr={this.getValue('aerial', 6)}
        />
        <PortfolioImage
          img={this.getValue('aerial', 9)}
          alt={this.getValue('aerial', 8)}
          descr={this.getValue('aerial', 8)}
        />
        <PortfolioImage
          img={this.getValue('aerial', 11)}
          alt={this.getValue('aerial', 10)}
          descr={this.getValue('aerial', 10)}
        />
      </div>
    );
  }
};
