import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class CTO extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    CtoContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('cto/');
    aboutPage.on('value', (data) => {
      this.setState({ CtoContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.CtoContent[nr] && this.state.CtoContent[nr][val];
  }

  render() {
    return (
      <div className="cto-content">
        <div className="title">
          <h2>Co-Founder</h2>
          <p>Currenly I'm a Co-Founder of two projects - <a href="https://triptemptation.com" target="_blank">TripTemptation.com</a> which is a luxury travel blog and <a href="https://weddenly.com" target="_blank">Weddenly.com</a> which is a wedding website builder that can help anyone create a perfect and beautiful wedding website.<br/><br/>I'm also running my own <a href="https://www.shutterstock.com/g/IngusKruklitis?rid=3325097&utm_medium=email&utm_source=ctrbreferral-link" target="_blank">Shutterstock</a> account where you can purchase some of my best travel photos and videos.</p>
        </div>
        <div className="description">
          <div>
            <a href="https://weddenly.com" target="_blank"><img src="../img/logos/weddenly-logo.png" alt="Weddenly website builder" /></a>
            <p><a href="https://weddenly.com" target="_blank">Weddenly</a> is an amazing wedding website builder that lets you create your own wedding website in minutes. It is simple, easy, fast and really fun. Let all your guests know all your wedding details. When? Where? What time?</p>
          </div>
          <div>
            <a href="https://triptemptation.com" target="_blank"><img src="../img/logos/TT-logo.png" alt="TripTemptation website builder" /></a>
            <p><a href="https://triptemptation.com" target="_blank">TripTemptation</a> is all about capturing the unique moment of your travel experience. Be a better traveller with TripTemptation. Find your inspiration with us and make your dreams come true.</p>
          </div>
          <div>
            <a href="https://www.shutterstock.com/g/IngusKruklitis?rid=3325097&utm_medium=email&utm_source=ctrbreferral-link" target="_blank"><img src="../img/logos/shutterstock-logo.jpg" alt="Shutterstock photo stocks" /></a>
            <p><a href="https://www.shutterstock.com/g/IngusKruklitis?rid=3325097&utm_medium=email&utm_source=ctrbreferral-link" target="_blank">Shutterstock</a> is an American stock photography website where I sell my travel photos and videos. If you are also interested in making profit out of your beautiful photos and videos feel free to contact me and I will help you. It is really not difficult once you get the key points.</p>
          </div>
        </div>
      </div>
    );
  }
};
