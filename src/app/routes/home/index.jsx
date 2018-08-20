import React from 'react';
import {NavLink} from 'react-router-dom';
import Arrow from '../../../../img/icons/arrow.svg';
import ReactPlaceholder from 'react-placeholder';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import {database} from "firebase";

import style from './styles.scss';

export default class Posts extends React.PureComponent {

  constructor(...args) {
    super(...args);
  }

  state = {
    posts: [],
    lastPost: {},
    main: [],
    ready: false,
  }

  componentDidMount() {
    this.getBlogPosts();
    this.getMainPost();
    this.getMainInfo();
  };

  getMainInfo() {
    var posts = database().ref('posts/');
    posts.on('value', (data) => {
      const posts = data.val();
      this.setState({ main: data.val() });
    });
  }

  getBlogPosts() {
    var posts = database().ref('posts/').limitToLast(8);

    posts.on('value', (data) => {
      const newData = data.val();
      const posts = Object.keys(newData).map(key => {
        return newData[key];
      });

      posts.reverse().shift();
      // get last 9 posts, reverse the order and remove first element
      // const posts = data.val().reverse().slice(1);
      // // save posts into state
      this.setState({ posts });
    });
  }

  getMainPost() {
    var posts = database().ref('posts/').limitToLast(1);
    posts.on('value', (data) => {
      // get last/latest post
      const post = data.val();
      // returned post is object with value key
      // get the right key. We don't know which key gets returned
      // so we get a massive with all keys in Object and get the first key (which ever it is)
      const elementKey = Object.keys(post)[0];
      // save post into state with the received key
      this.setState({ lastPost: post[elementKey] });
    });
  }

  getValue(val, nr) {
    return this.state.main[nr] && this.state.main[nr][val];
  }

  render() {
    const { lastPost, posts } = this.state;

    const ready = !!posts.length;

    return (
      <div className="main-content">
        {!!posts.length &&
          <div>
            <Arrow className="arrow"/>
            <h1 dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 0)}} />
            <div className="top-slider">
              <div className="slider-description">
                <h3>{lastPost.date}</h3>
                <NavLink to={`/story-blog/${lastPost.slug}`}><h2>{lastPost.title}</h2></NavLink>
                <h5>{lastPost.category}</h5>
                <p dangerouslySetInnerHTML={{__html:lastPost.description}} />
              </div>
              <div className="slider-photo">
                <NavLink to={`/story-blog/${lastPost.slug}`}><img src={lastPost.photo} alt={lastPost.title} /></NavLink>
              </div>
            </div>
          </div>
          }
          <h2 dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 1)}} />
            <div className="posts">
              {posts.map((post, index) => (
                <ReactPlaceholder type='media' rows={4} ready={ready} key={index}>
                <div className={`post-${index + 1}`}>
                  <NavLink to={`/story-blog/${post.slug}`}><img src={post.photo} alt={post.title} /></NavLink>
                  <h3>{post.date}</h3>
                  <NavLink to={`/story-blog/${post.slug}`}><h4>{post.title}</h4></NavLink>
                  <h5>{post.category}</h5>
                  <p dangerouslySetInnerHTML={{__html:post.description}} />
                </div>
                </ReactPlaceholder>
              ))}
          </div>
      </div>
    );
  }
};
