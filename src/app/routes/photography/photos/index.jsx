import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
import {database} from "firebase";
import style from '../styles.scss';

export default class PhotographyAerial extends React.PureComponent {

  state = {
    photographyPageContent: [],
  }

  componentDidMount() {
    var photographyPage = database().ref('photography/');
    photographyPage.on('value', (data) => {
      this.setState({ photographyPageContent: data.val() });
    });
  };

  render() {
    const { photographyPageContent } = this.state;
    const activePath = this.props.location.pathname;

    if (!photographyPageContent.length) {
      return <div/>
    }

    // Take the last part of the activePath
    const sectionName = activePath.split('/').slice(-1).pop();
    const photoDescr = `${sectionName}-descr`;

    const currentData = photographyPageContent.find(obj => obj.slug === sectionName);
    const title = currentData.titles;
    const descr = currentData.descr;

    return (
      <div className="photo-content">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{__html:`${descr}`}} />
        {photographyPageContent.map((item, index) => (
          <DescriptionPage
            key={index}
            img={photographyPageContent[index][sectionName]}
            alt={photographyPageContent[index][photoDescr]}
            descr={photographyPageContent[index][photoDescr]}
          />
        ))}
      </div>
    );
  }
};
