import React from 'react';
import PhotographyDescription from '../../components/descr_page/index.jsx';
import { NavLink } from 'react-router-dom';
import { database } from "firebase";
import Head from '../../components/Helmet/Helmet';

import style from './styles.scss';

export default class Photography extends React.PureComponent {

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
    const { photographyPageContent } = this.state;
    return (
      <div className="photo-content">
        <Head
          title={this.getValue('meta', 0)}
          content={this.getValue('meta', 1)}
        />
        <h2>{this.getValue('mainHeaders', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('mainHeaders', 1)}} />
        <div className="photo-grid">
          {photographyPageContent.slice(0,5).map((photo, index) => (
            <NavLink
              key={index}
              to={`/photography/${photo.slug}`}
              className={`photography-${index + 1}`}>
              <PhotographyDescription
                photography
                img={photographyPageContent[index].link}
                alt={photographyPageContent[index].category}
              />
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
};
