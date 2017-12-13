import React from 'react';
import {NavLink} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class Posts extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getBlogPosts = this.getBlogPosts.bind(this);
    this.getMainPost = this.getMainPost.bind(this);
  }

  state = {
    posts: [],
    lastPost: {},
  }

  componentDidMount() {
    this.getBlogPosts();
    this.getMainPost();
  };

  getBlogPosts() {
    var posts = database().ref('posts/').limitToLast(9);
    posts.on('value', (data) => {
      // get last 9 posts, reverse the order and remove first element
      const posts = data.val().reverse().slice(1);
      // save posts into state
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

  render() {
    const { lastPost, posts } = this.state;
    return (
      <div className="blog-content">
        <div className="top-slider">
          <div className="slider-description">
            <h3>{lastPost.date}</h3>
            <NavLink to='/blog/posts/1'><h2>{lastPost.title}</h2></NavLink>
            <h5>{lastPost.category}</h5>
            <p>{lastPost.description}</p>
          </div>
          <div className="slider-photo">
            <NavLink to='/blog/posts/1'><img src={lastPost.photo} alt={lastPost.title} /></NavLink>
          </div>
        </div>

        <div className="posts">
          {posts.map((post, index) => (
            <div className={`post-${index + 1}`} key={index}>
              <NavLink to='/blog/posts/2'><img src={post.photo} alt={post.title} /></NavLink>
              <h3>{post.date}</h3>
              <NavLink to='/blog/posts/2'><h4>{post.title}</h4></NavLink>
              <h5>{post.category}</h5>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
