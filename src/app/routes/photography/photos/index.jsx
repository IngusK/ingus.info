import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
import { withRouter } from 'react-router-dom';
import {database} from "firebase";

import style from '../styles.scss';

@withRouter
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
    const { photographyPageContent } = this.state;
    const activePath = this.props.location.pathname;
    return (
      <div className="photo-content">
        <h2>{this.getValue('titles', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('descr', 0)}} />
        {photographyPageContent.map((item, index) => (
          <DescriptionPage
            key={index}
            img={photographyPageContent[index].aerial}
            alt={photographyPageContent[index].aerialDescr}
            descr={photographyPageContent[index].aerialDescr}
          />
        ))}
      </div>
    );
  }
};
