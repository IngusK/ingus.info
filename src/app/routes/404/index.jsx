import React from 'react';
import {database} from 'firebase';

import style from './styles.scss';

export default class NotFound extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    notFoundContent: [],
  }

  componentDidMount() {
    var notFoundPage = database().ref('posts/');
    notFoundPage.on('value', (data) => {
      this.setState({ notFoundContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.notFoundContent[nr] && this.state.notFoundContent[nr][val];
  }

  render() {

    const { notFoundContent } = this.state;

    return (
      <div className="not-found">
          <h2>{this.getValue('mainBlock', 5)}</h2>
      </div>
    );
  }
};
