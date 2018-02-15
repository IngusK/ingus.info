import React from 'react';
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
    main: [],
  }

  componentDidMount() {
    this.getBlogPosts();
  };

  getBlogPosts() {
    const { match: { params } } = this.props;
    var blogPage = database().ref('posts/').orderByChild('slug')
    .equalTo(params.slug).limitToFirst(1);

    blogPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ blogPostPageContent: post[elementKey] });
    });
  };

  getValue(val, nr) {
    return this.state.main[nr] && this.state.main[nr][val];
  }

  render() {
    const { blogPostPageContent } = this.state;

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
