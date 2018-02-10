import React from 'react';
import {NavLink} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class Posts extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    posts: [],
  }

  componentDidMount() {
    this.getBlogPosts();
  };

  getBlogPosts() {
    var posts = database().ref('posts/');
    posts.on('value', (data) => {
      const posts = data.val().reverse();
      this.setState({ posts });
    });

    const offset = 2*7;
    posts.slice(offset, offset + 7)
    console.log(offset);
  }

  getValue(val, nr) {
    return this.state.posts[nr] && this.state.posts[nr][val];
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="blog-content">
        <h2>{this.getValue('mainBlock', 4)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 3)}} />
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
