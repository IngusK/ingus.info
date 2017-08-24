import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class About extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('about/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.aboutPageContent[nr] && this.state.aboutPageContent[nr][val];
  }

  render() {
    return (
      <div className="about-content">
        <div className="title">
          <h2>About me</h2>
        </div>
        <div className="description">
          <h2>Who am I?</h2>
          <p>My name is Ingus Kruklitis. I grew up in Riga, Latvia. Since I was a child I've been quite a lot into sports, trvelling, designing and coding. Now many years later I'm still passionate about all fo those things. I also speak three languages - Latvian, Russian and English which can come very handy.</p>
          <h2>My skills</h2>
          <ul>
            <li><strong>Front-End developer</strong>. I develop websites: I write HTML, CSS and Javascript using latest technologies like CSS3/CSS4, ES6 and React to make your website come alive.</li>
            <li><strong>Web / Marketing designer</strong>. I've worked as a web designer for many years and designed quite a lot website for very different large and small customers.</li>
            <li><strong>Travel blogger</strong>. I've launched my own project - TripTemptation.com which is a travel blog whicj lets me travel the world and work with many different brands. So far I've visited 42 countries on 4 continents.</li>
            <li><strong>Travel photographer</strong>. I'm also a professional travel and aerial photographer. I always have my camera and drone with me during every trip to capture every unique moment that I encounter.</li>
          </ul>
          <h2>Sports</h2>
          <p>I'm a keen snowboarder, wakeboarder and recently have become also a skateborder. Basicaly I like everything that has a word "board" in it. Also I love playing tennis and beach volley. Always open for a tournament.</p>
          <h2>Contact me</h2>
          <p>If you wish to contact me regarding cooperation, job opportunities or just to have a chat feel free to drop me an e-mail at..</p>
          <div className="email-container">
            <h3>ingus.kruklitis@gmail.com</h3>
          </div>
          <p>..or contact me on <a href="https://www.facebook.com/ingus.kruklitis" target="_blank">Facebook</a>, <a href="https://www.linkedin.com/in/ingusk/" target="_blank">Linkedin</a> or <a href="https://www.instagram.com/ingus/" target="_blank">Instagram</a>.</p>
        </div>

        <h2>{this.getValue('Title')}</h2>
      </div>
    );
  }
};
