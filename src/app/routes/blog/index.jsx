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

  // getBlogPosts() {
  //   var posts = database().ref('posts/');
  //   posts.on('value', (data) => {
  //     const posts = data.val().reverse();
  //     const params = this.props.match;
  //     const resolvedPosts = posts.slice(params.page * 7, params.page * 7 + 7);
  //     this.setState({ posts: resolvedPosts })
  //   });
  // }

  getBlogPosts() {
    var posts = database().ref('posts/');
    posts.on('value', (data) => {
      const posts = data.val().reverse();
      this.setState({ posts });
    });
  }

  getValue(val, nr) {
    return this.state.posts[nr] && this.state.posts[nr][val];
  }

  render() {
    const { posts } = this.state;
    // const { match, location, history } = this.props
    // console.log("match", match);
    // console.log("location", location);
    // console.log("history", history);
    return (
      <div className="blog-content">
        <h2 dangerouslySetInnerHTML={{__html:this.getValue('storyBlock', posts.length-1)}} />
        <p dangerouslySetInnerHTML={{__html:this.getValue('storyBlock', posts.length-2)}} />
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
