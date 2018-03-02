import React from 'react';
import propTypes from 'prop-types';
import ReactGA from 'react-ga';
import fetchJsonp from 'fetch-jsonp';
import Header from './header.jsx';
import Footer from './footer.jsx';
import styles from './styles/styles.scss';

ReactGA.initialize('UA-22046198-4');
ReactGA.pageview(window.location.pathname + window.location.search);

const ACCESS_TOKEN = '2175385.71d5d16.2c180d8c9f67400cab80c094ba19edc1',
      TAG = 'ingusphoto',
      URL = `https://api.instagram.com/v1/tags/${TAG}/media/recent?access_token=${ACCESS_TOKEN}`;

      // Use client ID to authorise user, than copy the ACCESS TOKEN
      // https://www.instagram.com/developer/clients/manage/
      // https://www.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=http://ingus.info/&response_type=token

      // https://api.instagram.com/oauth/authorize/?client_id=71d5d16b9c33426e83e9e297858f6f88&redirect_uri=http://ingus.info/&response_type=code
      // curl -F 'client_id=71d5d16b9c33426e83e9e297858f6f88' -F 'client_secret=1aa1903cae1d4db9ae86cba9c614b4c3' -F 'grant_type=authorization_code' -F 'redirect_uri=http://ingus.info/' -F 'code=705a37ed52b1479b8e3d245ffe51ed87' https://api.instagram.com/oauth/access_token
      //
      // {"access_token": "2175385.71d5d16.2c180d8c9f67400cab80c094ba19edc1", "user": {"id": "2175385", "username": "ingus", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/18580816_429942380695445_7404465112259493888_a.jpg", "full_name": "Ingus", "bio": "Professional travel photographer\nhttps://www.shutterstock.com/g/Ingus+Kruklitis\nhttp://ingus.info", "website": "http://ingus.info/", "is_business": true}}%

export default class Wrapper extends React.Component {

  constructor(...args) {
    super(...args);
    this.setInstagram = this.setInstagram.bind(this);
  }

  state = {
    instagram: [],
  }

  static childContextTypes = {
    instagram: propTypes.array,
  }

  componentDidMount() {
    fetchJsonp(URL)
    .then(res => {
      return res.json()
    })
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
    const pathname = window.location.pathname;
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
