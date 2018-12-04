import React from 'react';
import {database} from "firebase";
import Disqus from 'disqus-react';
import Content from '../../../../components/content/index.jsx';
import RelatedPosts from '../../../../components/related_post/index.jsx';
import SocialIcons from '../../../../components/social_icons/index.jsx';
import SocialIconsMobile from '../../../../components/social_icons_mobile/index.jsx';
import { Link, withRouter} from 'react-router-dom';
import style from '../styles.scss';

@withRouter
export default class BlogPost extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    blogPostPageContent: [],
    posts: [],
  }

  componentDidMount() {
    this.getBlogPost();
    this.getBlogPosts();
  };

  getBlogPost() {
    const { match: { params } } = this.props;
    var blogPage = database().ref('posts/').orderByChild('slug')
    .equalTo(params.slug).limitToFirst(1);

    blogPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ blogPostPageContent: post[elementKey] });
    });
  };

  getBlogPosts() {
    var posts = database().ref('posts/');
    posts.on('value', (data) => {
      const posts = data.val();
      this.setState({ posts });
    });
  }

  getValue(val, nr) {
    return this.state.posts[nr] && this.state.posts[nr][val];
  }

  render() {
    const { blogPostPageContent, posts } = this.state;

    const disqusShortname = 'example';
    const disqusConfig = {
        url: blogPostPageContent.slug,
        identifier: blogPostPageContent.slug,
        title: blogPostPageContent.title,
    };

    return (
      <div className="blog-post">
        <div className="blog-post-content">
          <h2>{blogPostPageContent.title}</h2>
          {blogPostPageContent.titleDescr && <h6>{blogPostPageContent.titleDescr}</h6> }
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
            title = {blogPostPageContent.title}
            shareUrl = {`http://ingus.info${this.props.location.pathname}`}
          />
          <div className="blog-post-content">
            <Content html={blogPostPageContent.content} />
          </div>
          <SocialIconsMobile
            title = {blogPostPageContent.title}
            shareUrl = {`http://ingus.info${this.props.location.pathname}`}
          />
        </div>
        {blogPostPageContent.relatedImg &&
          <div className="related-posts">
            <h2>{this.getValue('mainBlock', 2)}</h2>
            <ul>
              <RelatedPosts
                img={blogPostPageContent.relatedImg}
                alt={blogPostPageContent.relatedTitle}
                category={blogPostPageContent.relatedCategory}
                title={blogPostPageContent.relatedTitle}
                link={blogPostPageContent.relatedLink}
              />
              {blogPostPageContent.relatedImg2 &&
                <RelatedPosts
                  img={blogPostPageContent.relatedImg2}
                  alt={blogPostPageContent.relatedTitle2}
                  category={blogPostPageContent.relatedCategory2}
                  title={blogPostPageContent.relatedTitle2}
                  link={blogPostPageContent.relatedLink2}
                />
              }
              {blogPostPageContent.relatedImg3 &&
                <RelatedPosts
                  img={blogPostPageContent.relatedImg3}
                  alt={blogPostPageContent.relatedTitle3}
                  category={blogPostPageContent.relatedCategory3}
                  title={blogPostPageContent.relatedTitle3}
                  link={blogPostPageContent.relatedLink3}
                />
              }
            </ul>
          </div>
        }
      </div>
    );
  }
};
