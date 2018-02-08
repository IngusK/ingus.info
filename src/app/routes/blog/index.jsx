import React from 'react';
import {NavLink} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class Posts extends React.PureComponent {

  state = {
    posts: [],
    lastPost: {},
  }

  componentDidMount() {
    this.getBlogPosts();
    this.getMainPost();
  };

  getBlogPosts() {
    // var posts = database().ref('posts/').orderByChild('slug').startAt('my-sky-diving-experience');
    var posts = database().ref('posts/');
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
      <div className="blog-content">
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

        <div className="posts">
          {posts.map((post, index) => (
            <div key={index}>
              <NavLink to={`/story-blog/${post.slug}`}><img src={post.photo} alt={post.title} /></NavLink>
              <h3>{post.date}</h3>
              <NavLink to={`/story-blog/${post.slug}`}><h4>{post.title}</h4></NavLink>
              <h5>{post.category}</h5>
              <p dangerouslySetInnerHTML={{__html:post.description}} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
