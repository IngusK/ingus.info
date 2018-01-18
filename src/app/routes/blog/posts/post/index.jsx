import React from 'react';
import {database} from "firebase";
import RelatedPosts from '../../../../components/related_post/index.jsx';
import Image from '../../../../components/image/index.jsx';
import mediumZoom from 'medium-zoom';
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
    isZoomed: false,
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    var blogPage = database().ref('posts/').orderByChild('slug')
    .equalTo(params.slug).limitToFirst(1);

    blogPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ blogPostPageContent: post[elementKey] });
    });

    const zoom = mediumZoom(this.refs.image);
    zoom.addEventListeners('show', () => this.setState({ isZoomed: true }));
    zoom.addEventListeners('hidden', () => this.setState({ isZoomed: false }));
  };

  getValue(val, nr) {
    return this.state.blogPostPageContent[nr] && this.state.blogPostPageContent[nr][val];
  }

  render() {
    const { blogPostPageContent, isZoomed } = this.state;

    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <h2>{blogPostPageContent.title}</h2>
        </div>
        {
          blogPostPageContent.photoSlide &&
          <div className="blog-post-slide">
            <img
              alt={blogPostPageContent.title}
              src={blogPostPageContent.photoSlide}
            />
          </div>
        }
        <div className="blog-post-content-wrapper">
          <SocialIcons
            shareUrl = {this.getValue('sharePost', 0)}
          />
          <div className="blog-post-content">
            <div dangerouslySetInnerHTML={{__html:blogPostPageContent.content}} />
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
