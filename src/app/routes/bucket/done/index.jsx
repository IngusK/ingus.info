import React from 'react';
import DescriptionPage from '../../../components/descr_page/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class BucketPage extends React.PureComponent {

  state = {
    bucketPageContent: [],
    bucketDefContent: [],
  }

  componentDidMount() {
    this.getDefInfo();
    this.getAllInfo();
  };

  getDefInfo() {
    var posts = database().ref('bucketlist/');
    posts.on('value', (data) => {
      const posts = data.val();
      this.setState({ bucketDefContent: data.val() });
    });
  }

  getAllInfo() {
    const { match: { params } } = this.props;
    var bucketPage = database().ref('bucketlist/').orderByChild('slug').equalTo(params.slug);

    bucketPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ bucketPageContent: post[elementKey] });
    });
  }

  getValue(val, nr) {
    return this.state.bucketDefContent[nr] && this.state.bucketDefContent[nr][val];
  }

  render() {
    const { bucketPageContent } = this.state;
    return (
      <div className="photo-content">
        <h2>{bucketPageContent.goal}</h2>
        <DescriptionPage
          img={bucketPageContent.img}
          alt={bucketPageContent.goal}
          descr={bucketPageContent.descr}
          descrDef={<p dangerouslySetInnerHTML={{__html:this.getValue('description', 2)}} />}
        />
      </div>
    );
  }
};
