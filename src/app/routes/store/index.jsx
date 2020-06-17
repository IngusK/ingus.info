import React from 'react';
import PhotographyDescription from '../../components/descr_page/index.jsx';
import { NavLink } from 'react-router-dom';
import { database } from "firebase";
import Head from '../../components/Helmet/Helmet';

import style from './styles.scss';

export default class Store extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    storePageContent: [],
  }

  componentDidMount() {
    var photographyPage = database().ref('store/');
    photographyPage.on('value', (data) => {
      this.setState({ storePageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.storePageContent[nr] && this.state.storePageContent[nr][val];
  }

  render() {
    const { storePageContent } = this.state;
    return (
      <div className="store-content">
        <Head
          title={this.getValue('meta', 0)}
          content={this.getValue('meta', 1)}
        />
        <h2>{this.getValue('mainHeaders', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('mainHeaders', 1)}} />
        <div className="photo-grid">
          {storePageContent.slice(0,7).map((photo, index) => (
          <div key={index}>
            <NavLink
              to={`/store/${photo.slug}`}
              className={`store-${index + 1}`}>
              <img src={storePageContent[index].link} />
            </NavLink>
            <h4>{storePageContent[index].titles}</h4>
            <NavLink
              to={`/store/${photo.slug}`}
              className={`store-${index + 1}`}>
              <h5>Get it now</h5>
            </NavLink>
          </div>
          ))}
        </div>
      </div>
    );
  }
};
