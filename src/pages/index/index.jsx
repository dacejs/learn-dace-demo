import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'dace';
import { fetchPosts } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

@connect(state => state)
export default class Index extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    }))
  };

  static defaultProps = {
    posts: []
  }

  static getInitialProps = (ctx) => {
    ctx.store.injectReducer(reducer);
    return ctx.store.dispatch(fetchPosts());
  }

  render() {
    return (
      <Layout>
        <h1>Post List</h1>
        <ol>
          {
            this.props.posts.map(post => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))
          }
        </ol>
      </Layout>
    );
  }
}
