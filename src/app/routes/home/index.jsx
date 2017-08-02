import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";
import Arrow from '../../../../img/icons/arrow.svg';

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
      const posts = data.val().reverse().slice(1);
      this.setState({ posts });
    });
  }

  getMainPost() {
    var posts = database().ref('posts/').limitToLast(1);
    posts.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ lastPost: post[elementKey] });
    });
  }

  render() {
    const { lastPost, posts } = this.state;
    return (
      <div className="main-content">
        <Arrow className="arrow"/>
        <h1><span>{lastPost.name}</span><br/>Welcome to my personal web page where I share my <b>travel</b>, <b>coding</b> and <b>photography</b> experience! <br/> <i>Why don't you start with my latest post?</i></h1>
        <div className="top-slider">
          <div className="slider-description">
            <h3>{lastPost.date}</h3>
            <Link to=''><h2>{lastPost.title}</h2></Link>
            <h5>{lastPost.category}</h5>
            <p>{lastPost.description}</p>
          </div>
          <div className="slider-photo">
            <Link to=''><img src={lastPost.photo} alt={lastPost.title} /></Link>
          </div>
        </div>

        <h2>Some of my latest posts</h2>
        <div className="posts">
          {posts.map((post, index) => (
            <div className={`post-${index + 1}`} key={index}>
              <Link to=''><img src={post.photo} alt={post.title} /></Link>
              <h3>{post.date}</h3>
              <Link to=''><h4>{post.title}</h4></Link>
              <h5>{post.category}</h5>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
