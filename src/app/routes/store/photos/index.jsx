import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
import {database} from "firebase";
import Head from '../../../components/Helmet/Helmet';
import style from '../styles.scss';

export default class PhotographyAerial extends React.PureComponent {

  state = {
    storePageContent: [],
  }

  componentDidMount() {
    var photographyPage = database().ref('store/');
    photographyPage.on('value', (data) => {
      this.setState({ storePageContent: data.val() });
    });
  };

  render() {
    const { storePageContent } = this.state;
    const activePath = this.props.location.pathname;

    if (!storePageContent.length) {
      return <div/>
    }

    // Take the last part of the activePath
    const sectionName = activePath.split('/').slice(-1).pop();
    const photoDescr = `${sectionName}-descr`;

    const currentData = storePageContent.find(obj => obj.slug === sectionName);
    const title = currentData.titles;
    const descr = currentData.descr;
    return (
      <div className="photo-content">
        <Head
          title={`ingus.info - ${title}`}
          content={`ingus.info - ${descr}`}
        />
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{__html:`${descr}`}} />
        {storePageContent.map((item, index) => (
          <DescriptionPage
            store
            key={index}
            img={storePageContent[index][sectionName]}
            alt={storePageContent[index][photoDescr]}
            descr={storePageContent[index][photoDescr]}
          />
        ))}
        <a className="presets-button" href="https://sellfy.com/ingusfilms/p/tgohri/" target="_blank">Get Presets</a>
      </div>
    );
  }
};
