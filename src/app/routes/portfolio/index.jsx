import React from 'react';
import {database} from "firebase";
import DescriptionPage from '../../components/descr_page/index.jsx';

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
        <div className="title">
          <h2>{this.getValue('header', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('description', 0)}}/>
        </div>
        <h3>{this.getValue('header', 1)}</h3>
        {portfolioContent.map((item, index) => (
          <DescriptionPage key={index}
            img={item.img}
            alt={item.name}
          />
        ))}
      </div>
    );
  }
};
