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
    photo: '',
    photoDescr: '',
    titleDescrNr: 0,
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
    const { photographyPageContent, photo, photoDescr, titleDescrNr } = this.state;
    const activePath = this.props.location.pathname;

    // Take the last part of the activePath
    const sectionName = activePath.split('/').slice(-1).pop();
    const sectionDescription = `${sectionName}-descr`;
    this.setState({
      photo: sectionName,
      photoDescr: sectionDescription
    });

    switch (sectionName) {
      case "aerial":
        this.setState({
          titleDescrNr: 0
        });
      break;
      case "people":
        this.setState({
          titleDescrNr: 1
        });
      break;
      case "city-life":
        this.setState({
          titleDescrNr: 2
        });
      break;
      case "travel":
        this.setState({
          titleDescrNr: 3
        });
      break;
      case "nature":
        this.setState({
          titleDescrNr: 4
        });
      break;
    }

    return (
      <div className="photo-content">
        <h2>{this.getValue('titles', titleDescrNr)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('descr', titleDescrNr)}} />
        {photographyPageContent.map((item, index) => (
          <DescriptionPage
            key={index}
            img={photographyPageContent[index][photo]}
            alt={photographyPageContent[index][photoDescr]}
            descr={photographyPageContent[index][photoDescr]}
          />
        ))}
      </div>
    );
  }
};
