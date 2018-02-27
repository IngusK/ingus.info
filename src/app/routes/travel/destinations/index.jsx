import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class TravelPage extends React.PureComponent {

  state = {
    travelPageContent: [],
    travelDefContent: [],
  }

  componentDidMount() {
    this.getDefInfo();
    this.getAllInfo();
  };

  getDefInfo() {
    var posts = database().ref('travel/');
    posts.on('value', (data) => {
      const posts = data.val();
      this.setState({ travelDefContent: data.val() });
    });
  }

  getAllInfo() {
    const { match: { params } } = this.props;
    var travelPage = database().ref('travel/').orderByChild('slug').equalTo(params.slug);

    travelPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ travelPageContent: post[elementKey] });
    });
  }

  getValue(val, nr) {
    return this.state.travelDefContent[nr] && this.state.travelDefContent[nr][val];
  }

  render() {
    const { travelPageContent } = this.state;
    return (
      <div className="photo-content">
        <h2>{`${travelPageContent.name}, ${travelPageContent.country}`}</h2>
        <DescriptionPage
          img={travelPageContent.img}
          alt={travelPageContent.name}
          noDescr
          // descr={travelPageContent.descr}
          // descrDef={<p dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 4)}} />}
        />
      </div>
    );
  }
};
