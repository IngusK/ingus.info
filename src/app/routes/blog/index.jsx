import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {database} from "firebase";
import ReactPaginate from 'react-paginate';
import style from './styles.scss';

@withRouter
export default class Posts extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);

    this.postsPerPage = 9;
  }

  state = {
    posts: [],
    postsOnPage: [],
    currentPage: 1,
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
  }

  getPostsForPage(page) {
    const from = (page - 1) * this.postsPerPage;
    const to = from + this.postsPerPage;
    return this.state.posts.slice(from, to)
  }

  getValue(val, nr) {
    return this.state.posts[nr] && this.state.posts[nr][val];
  }

  renderPost(post, index) {
    return <div key={index}>
      <Link to={`/story-blog/${post.slug}`}><img src={post.photo} alt={post.title} /></Link>
      <h3>{post.date}</h3>
      <Link to={`/story-blog/${post.slug}`}><h4>{post.title}</h4></Link>
      <h5>{post.category}</h5>
      <p dangerouslySetInnerHTML={{__html:post.description}} />
    </div>
  }

  handlePageClick(attr) {
    const { match: { params } } = this.props;
    const currentPage = params.page || 1;
    const newPageNumber = attr.selected + 1;
    if (newPageNumber != currentPage) {
      this.props.history.push("/story-blog/page=" + (newPageNumber));
    }
  }

  render() {
    const { match: { params } } = this.props;
    const { posts } = this.state;
    const currentPage = params.page || 1;
    const postsOnPage = this.getPostsForPage(currentPage)
    return (
      <div className="blog-content">
        <h2 dangerouslySetInnerHTML={{__html:this.getValue('storyBlock', posts.length-1)}} />
        <p dangerouslySetInnerHTML={{__html:this.getValue('storyBlock', posts.length-2)}} />
        <div className="posts">
          {postsOnPage.map(this.renderPost)}
        </div>
        <ReactPaginate previousLabel={"<"}
           nextLabel={">"}
           breakLabel={<a href="">...</a>}
           breakClassName={"break-me"}
           pageCount={ Math.ceil( posts.length / this.postsPerPage) }
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={this.handlePageClick.bind(this)}
           containerClassName={"pagination"}
           initialPage={currentPage - 1}
           subContainerClassName={"pages pagination"}
           activeClassName={"active"} />
      </div>
    );
  }
};
