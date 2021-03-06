import React from 'react';
import {database} from "firebase";
import ImageZoom from 'react-medium-image-zoom';
import Head from '../../components/Helmet/Helmet';

import style from './styles.scss';

export default class Portfolio extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getPortfolioPosts = this.getPortfolioPosts.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    portfolioContent: [],
  }

  componentDidMount() {
    this.getPortfolioPosts();
  };

  getPortfolioPosts() {
    var value = database().ref('portfolio/');
    value.on('value', (data) => {
      this.setState({ portfolioContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.portfolioContent[nr] && this.state.portfolioContent[nr][val];
  }

  render() {
    const { portfolioContent } = this.state;
    return (
      <div className="portfolio-content">
        <Head
          title={this.getValue('meta', 0)}
          content={this.getValue('meta', 1)}
        />
        <div className="title">
          <h2>{this.getValue('header', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('description', 0)}}/>
        </div>
        <h3>{this.getValue('header', 1)}</h3>
        <div className="portfolio-grid">
          {portfolioContent.map((item, index) => (
            <div key={index}>
              <ImageZoom
                image={{
                  src: item.img,
                  alt: item.name,
                }}
                zoomImage={{
                  src: item.img,
                  alt: item.name,
                  className: 'zoom-img'
                }}
                shouldRespectMaxDimension={true}
              />
              <h4>{item.name}</h4>
              <p dangerouslySetInnerHTML={{__html:item.descr}} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
