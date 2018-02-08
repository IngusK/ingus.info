import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class PortfoliotPage extends React.PureComponent {

  state = {
    portfolioPageContent: [],
    PortfolioContent: [],
  }

  componentDidMount() {
    this.getDefInfo();
    this.getAllInfo();
  };

  getDefInfo() {
    var posts = database().ref('portfolio/');
    posts.on('value', (data) => {
      const posts = data.val();
      this.setState({ PortfolioContent: data.val() });
    });
  }

  getAllInfo() {
    const { match: { params } } = this.props;
    var bucketPage = database().ref('portfolio/').orderByChild('slug').equalTo(params.slug);

    bucketPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ portfolioPageContent: post[elementKey] });
    });
  }

  getValue(val, nr) {
    return this.state.PortfolioContent[nr] && this.state.PortfolioContent[nr][val];
  }

  render() {
    const { portfolioPageContent } = this.state;
    return (
      <div className="photo-content">
        <h2>{portfolioPageContent.goal}</h2>
        <DescriptionPage
          img={portfolioPageContent.img}
          alt={portfolioPageContent.goal}
          descr={portfolioPageContent.descr}
          descrDef={<p dangerouslySetInnerHTML={{__html:this.getValue('description', 2)}} />}
        />
      </div>
    );
  }
};
