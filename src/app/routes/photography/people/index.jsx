import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
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
        <h2>{this.getValue('people', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('people', 1)}} />
        <DescriptionPage
          img={this.getValue('aerial', 3)}
          alt={this.getValue('aerial', 2)}
          descr={this.getValue('aerial', 2)}
        />
        <DescriptionPage
          img={this.getValue('aerial', 5)}
          alt={this.getValue('aerial', 4)}
          descr={this.getValue('aerial', 4)}
        />
        <DescriptionPage
          img={this.getValue('aerial', 7)}
          alt={this.getValue('aerial', 6)}
          descr={this.getValue('aerial', 6)}
        />
        <DescriptionPage
          img={this.getValue('aerial', 9)}
          alt={this.getValue('aerial', 8)}
          descr={this.getValue('aerial', 8)}
        />
        <DescriptionPage
          img={this.getValue('aerial', 11)}
          alt={this.getValue('aerial', 10)}
          descr={this.getValue('aerial', 10)}
        />
      </div>
    );
  }
};
