import React from 'react';
import Image from '../../../../components/image/index.jsx';
import {database} from "firebase";
import RelatedPosts from '../../../../components/related_post/index.jsx';
import SocialIcons from '../../../../components/social_icons/index.jsx';
import SocialIconsMobile from '../../../../components/social_icons_mobile/index.jsx';

import style from '../styles.scss';


export default class BlogPost extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    blogPostPageContent: [],
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    var blogPage = database().ref('posts/').orderByChild('slug')
    .equalTo(params.slug).limitToFirst(1); //database().ref(`blog/post/${params.userId}`);

    blogPage.on('value', (data) => {
      console.log("YYYYYY");
      console.log(data.val());
      console.log("ZZZZZZ");
      this.setState({ blogPostPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.blogPostPageContent[nr] && this.state.blogPostPageContent[nr][val];
  }

  render() {
    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <h2>{this.getValue('title', 0)}</h2>
        </div>
        <div className="blog-post-slide">
          <img
            alt={this.getValue('alt', 0)}
            src={this.getValue('image', 0)}
          />
        </div>
        <div className="blog-post-content-wrapper">
          <SocialIcons
            shareUrl = {this.getValue('sharePost', 0)}
          />
          <div className="blog-post-content">
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 0)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 1)}} />
            <h3>{this.getValue('subtitles', 2)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 2)}} />
            <h3>{this.getValue('subtitles', 3)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 3)}} />
            <h3>{this.getValue('subtitles', 4)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 4)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 5)}} />
            <div className="blog-post-photo right">
              <Image
                img={this.getValue('image', 2)}
                alt={this.getValue('alt', 2)}
              />
              <h5 dangerouslySetInnerHTML={{__html:this.getValue('image', 3)}} />
            </div>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 6)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 7)}} />
            <div className="blog-post-photo single">
              <Image
                img={this.getValue('image', 4)}
                alt={this.getValue('alt', 4)}
              />
            </div>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 8)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 9)}} />
            <h4 dangerouslySetInnerHTML={{__html:this.getValue('quote', 0)}} />
          </div>
          <SocialIconsMobile
            shareUrl = 'http://ingus.info'
          />
        </div>
        <div className="related-posts">
          <h2>{this.getValue('related', 0)}</h2>
          <ul>
            <RelatedPosts
              img={this.getValue('related', 5)}
              alt={this.getValue('related', 4)}
              category={this.getValue('related', 2)}
              title={this.getValue('related', 3)}
              link={this.getValue('related', 6)}
            />
          </ul>
        </div>
      </div>
    );
  }
};
