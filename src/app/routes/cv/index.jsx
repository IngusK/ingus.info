import React from 'react';
import {Link} from 'react-router-dom';
import {database} from 'firebase';
import Image from '../../components/image/index.jsx';
import Company from '../../components/company/index.jsx';

import style from './styles.scss';

export default class CV extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('cv/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.aboutPageContent[nr] && this.state.aboutPageContent[nr][val];
  }

  render() {
    return (
      <div className="cv-content">
        <div className="main-info">
          <img src="../../../../img/Ingus_kruklitis.jpg" alt="Ingus Kruklitis CV background" />
          <div className="description">
            <h2>Ingus Kruklitis</h2>
            <h3>CTO / Front-End developer / Web designer / Travel Photographer</h3>
            <p>Hi there!<br/>In short I am an experienced <strong>web designer</strong> and <strong>front-end developer</strong> based in Riga, Latvia as well as a professional <strong>travel photographer</strong>. I get joy from crafting great user experiences by creating amazing products using latest technologies. Travelling the world is my second passion, visiting different places and most importantly connecting with people in search of new endless possibilities in life..</p>
          </div>
        </div>
        <div className="cv_info">
          <div className="coding">
            <h3>Coding</h3>
            <p>As I've already mentioned above I'm a <strong>Front-End developer</strong> with more than 8 years of experience in web development. I still remember the times when we had to use tiny png/gif images to have rounded-borders and create our layouts using tables with rows and columns. These days luckily we've switched to latest technologies which make everything just so much simpler but at the same time there's so so much more stuff to handle. Below is the list of technologies that I use on my everyday bases:</p>
            <ul>
              <li>HTML5, CSS3/CSS4 (including CSS grids and rem units)</li>
              <li>SCSS, <span>LESS (past)</span>, PostCSS</li>
              <li>Javascript, ES6, JSON</li>
              <li>React, Babel, Node, Yarn, Webpack</li>
              <li>Mobile first approach</li>
              <li>Crossbrowsers support, SEO, GA, AB testing, Heat maps</li>
              <li>Git, Stash</li>
            </ul>
            <p>Ou, and of course Atom and Mac OS</p>
          </div>
          <div className="travel">
            <h3>Travel Photography</h3>
            <p>Besides my IT education I've also become a professional travel photographer. I go to different places in search of the ideal shot, unique sunset, the perfect moment. And the best part is that I get to meet so many cool people during my journeys. So far I've been to 42 different countries and hundreds of cities world wide and have no intensions of stopping. The stuff that I'm using:</p>
            <ul>
              <li>Canon 5D Mark III (planning to switch to Sony A7RII)</li>
              <li>DJi Mavic Pro</li>
              <li>Go Pro 5 Black with Dome port</li>
              <li>Sirui T-025X Carbon Fiber Tripod</li>
              <li>Lowepro ViewPoint BP 250 AW backpack</li>
            </ul>
            <p>If you're interested in Travel or Aerial photography / footage feel free to contact me.</p>
          </div>
          <div className="work-exp">
            <h3>Work Experience</h3>
            <Company
              date={'2015 - 2016'}
              company={'Lifland Gaming Group Team'}
              location={'Riga, Latvia'}
              position={'UX/UI Designer / Front-End Developer'}
              description={"Maintaining and redesigning the existing product. Responsible for mobile version design and development. Front-end coding. Working together with other back-end developers."}
            />
            <Company
              date={'2012 - 2015'}
              company={'AS Geta'}
              location={'Riga, Latvia / Oslo, Norway'}
              position={'Front-End Developer'}
              description={"Main responsibilities include developing and maintaining the company's WEB sites. Main tasks suppose working with HTML and CSS, different browser capability, Flash and ActionScript, Wordpress, etc. In short - representing the company's image live and on the Web."}
            />
            <Company
              date={'2010 - 2012'}
              company={'SIA Inbox'}
              location={'Riga, Latvia'}
              position={'UX/UI Designer / Front-End Developer'}
              description={"Working on internal / external projects, creating wiframe samples, converting them into unique web based design elements and front - end coding. Helping other back - end develoeprs with their duty."}
            />
            <Company
              date={'2010'}
              company={'SIA TezGSM'}
              location={'Riga, Latvia'}
              position={'Senior WEB Designer'}
              description={"Redesigning main web site and provide technical support to other internal projects. Creating different banners and posters for marketing needs."}
            />
            <Company
              date={'2009'}
              company={'SIA Hortus Digital'}
              location={'Riga, Latvia'}
              position={'WEB project and content manager'}
              description={"Main responsibilities were developing and maintaining the company's brand and Web page based on Microsoft SharePoint 2007/2010 system. Also had to deal with different issues considering design work (banners, advertisements, web design and typography) and technical documentation."}
            />
            <Company
              date={'2008'}
              company={'SIA Tieto'}
              location={'Riga, Latvia'}
              position={'Technical support consultant'}
              description={"Based on my education, job included working with IT technologies like Linux, Oracle, SQL data bases, Tuxedo system and Tomcat servers. Had to deal with a large banking system (e-commerce, u-commerce, visa and master-card business, ATM construction, parsing log files), client support (banks and processing centers), finding solutions considering financial and technical issues throughout Europe, including Russian, Ukraine, Lithuania, Bosnia, Serbia, Romania, etc."}
            />
          </div>
          <div className="certificates">
            <h3>Certificates</h3>
            <ul>
              <Image
                img={"../img/certificates/bachelor_large.jpg"}
                alt={"Bachelor certificate"}
              />
              <Image
                img={"../img/certificates/business_large.jpg"}
                alt={"Business certificate"}
              />
              <Image
                img={"../img/certificates/data_pro_large.jpg"}
                alt={"Data Pro certificate"}
              />
              <Image
                img={"../img/certificates/goethe_large.jpg"}
                alt={"Goethe certificate"}
              />
              <Image
                img={"../img/certificates/international_house_large.jpg"}
                alt={"International house certificate"}
              />
              <Image
                img={"../img/certificates/master_large.jpg"}
                alt={"Master degree certificate"}
              />
              <Image
                img={"../img/certificates/photography_large.jpg"}
                alt={"Photography certificate"}
              />
              <Image
                img={"../img/certificates/progmeistars_large.jpg"}
                alt={"Progmeistars certificate"}
              />
              <Image
                img={"../img/certificates/tieto_large.jpg"}
                alt={"Tieto certificate"}
              />
              <Image
                img={"../img/certificates/w3schools_large.jpg"}
                alt={"W3chools certificate"}
              />
            </ul>
          </div>
          <div className="stocks">
            <h3>Photo stocks</h3>
            <p>Currently I have two accounts on photo stock website: <a href="https://www.shutterstock.com/g/IngusKruklitis" target="_blank">Shutterstock</a> and <a href="https://eu.fotolia.com/p/205896011" target="_blank">Fotolia</a> by Adobe. Combined my portfolio consists of around 7000 photos and 500 videos and my most popular photo has sold more than 800 times. Feel free to contact me in case you are interested in any of my content or collaboration.</p>
          </div>
          <div className="cto">
            <h3>CTO</h3>
            <p>I'm a co-foudner of several online projects:</p>
            <ul>
              <li><a href="http://weddenly.com/" target="_blank">Weddenly.com</a> - Wedding website building platform</li>
              <li><a href="https://www.triptemptation.com/" target="_blank">TripTemptation.com</a> - Inspirational travel website blog</li>
            </ul>
            <p>Currently I'm working on optimisation tasks and looking forward to the new ones. Always ready for cooperation. Both projects are fully designed and developed (front-end part) by me. Back-end was made my companions (other co-founders). </p>
          </div>
        </div>
      </div>
    );
  }
};
