import React from 'react';
import {Link} from 'react-router-dom';
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
    var blogPage = database().ref('blog/');
    blogPage.on('value', (data) => {
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
          <h5 dangerouslySetInnerHTML={{__html:this.getValue('image', 1)}} />
        </div>
        <div className="blog-post-content-wrapper">
          <SocialIcons
            shareUrl = {this.getValue('sharePost', 0)}
          />
          <div className="blog-post-content">
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 0)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 1)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 2)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 3)}} />
            <h4>{this.getValue('quote', 0)}</h4>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 4)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 5)}} />
            <h3>{this.getValue('subtitle', 0)}</h3>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 6)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 7)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 8)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 9)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 10)}} />
            <div className="blog-post-photo right">
              <Image
                img={this.getValue('image', 2)}
                alt={this.getValue('alt', 2)}
              />
              <h5 dangerouslySetInnerHTML={{__html:this.getValue('image', 3)}} />
            </div>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 11)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 12)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 13)}} />
            <div className="blog-post-photo left">
              <div className="iframe-wrapper">
                <iframe src={this.getValue('iframe', 0)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
              </div>
              <h5 dangerouslySetInnerHTML={{__html:this.getValue('image', 5)}} />
            </div>
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 14)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 15)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 16)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 17)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 18)}} />
            <div className="blog-post-photo double">
              <Image
                img={this.getValue('image', 4)}
                alt={this.getValue('alt', 4)}
              />
              <Image
                img={this.getValue('image', 6)}
                alt={this.getValue('alt', 6)}
              />
            </div>
            <h5 dangerouslySetInnerHTML={{__html:this.getValue('image', 7)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 19)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 20)}} />
            <p dangerouslySetInnerHTML={{__html:this.getValue('text', 21)}} />
          </div>
          <SocialIconsMobile
            shareUrl = 'http://ingus.info'
          />
        </div>
        <div className="related-posts">
          <h2>{this.getValue('related', 0)}</h2>
          <ul>
            <RelatedPosts
              img={this.getValue('image', 0)}
              alt={this.getValue('related', 4)}
              category={this.getValue('related', 2)}
              title={this.getValue('related', 3)}
            />
            <RelatedPosts
              img={this.getValue('image', 2)}
              alt={this.getValue('related', 9)}
              category={this.getValue('related', 7)}
              title={this.getValue('related', 8)}
            />
            <RelatedPosts
              img={this.getValue('image', 4)}
              alt={this.getValue('related', 14)}
              category={this.getValue('related', 12)}
              title={this.getValue('related', 13)}
            />
          </ul>
        </div>
      </div>
    );
  }
};
