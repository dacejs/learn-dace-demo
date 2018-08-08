import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Layout from '../../layouts/default';

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.any
  };

  static defaultProps = {
    post: {}
  }

  static async getInitialProps(ctx) {
    const { id } = ctx.match.params;
    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
    const post = res.data;
    return { post };
  }

  render() {
    const { post } = this.props;
    return (
      <Layout>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </Layout>
    );
  }
}
