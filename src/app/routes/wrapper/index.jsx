import React from 'react';
import propTypes from 'prop-types';
import fetchJsonp from 'fetch-jsonp';
import Header from './header.jsx';
import Footer from './footer.jsx';
import styles from './styles/styles.scss';

const ACCESS_TOKEN = '2175385.71d5d16.041d6a6a1a754b7b9de7af00d9dcf564',
      TAG = 'ingusphoto',
      URL = `https://api.instagram.com/v1/tags/${TAG}/media/recent?access_token=${ACCESS_TOKEN}`;

export default class Wrapper extends React.Component {

  constructor(...args) {
    super(...args);

    this.setInstagram = this.setInstagram.bind(this);
  }

  state = {
    instagram: [],
  }

  static childContextTypes = {
    instagram: propTypes.array.isRequired,
  }

  componentDidMount() {
    fetchJsonp(URL)
    .then(res => res.json())
    .then(this.setInstagram)
    .catch(err => console.error(err));
  }

  getChildContext() {
    return {
      instagram: this.state.instagram,
    }
  }

  setInstagram(json) {
    this.setState({instagram: json.data})
  }

  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        <div className="message">Please update or use a browser that supports modern technologies like CSS Grids.</div>
        <div className="grid-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}
