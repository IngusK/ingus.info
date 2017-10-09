import React from 'react';
import Image from '../../components/image_empty/index.jsx';
import {Link} from 'react-router-dom';
import {database} from "firebase";

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
    return (
      <div className="photo-content">
        <h2>My portfolio</h2>
        <p>Choose a category you want to explore</p>
        <ul>
          <Link to='/aerial' className="aerial">
            <Image
              img={"../img/portfolio/aerial/aerial.jpg"}
              alt={"Aerial"}
            />
          </Link>
          <Link to='/people' className="people">
            <Image
              img={"../img/portfolio/people/people.jpg"}
              alt={"People"}
            />
          </Link>
          <Link to='/citylife' className="citylife">
            <Image
              img={"../img/portfolio/citylife/city.jpg"}
              alt={"City life"}
            />
          </Link>
          <Link to='/travel' className="travel">
            <Image
              img={"../img/portfolio/travel/travel.jpg"}
              alt={"Travel"}
            />
          </Link>
          <Link to='/nature' className="nature">
            <Image
              img={"../img/portfolio/nature/nature.jpg"}
              alt={"Nature"}
            />
          </Link>
        </ul>
      </div>
    );
  }
};
