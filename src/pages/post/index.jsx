import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

@connect(state => state)
export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object
  };

  static defaultProps = {
    post: {}
  }

  static getInitialProps = (ctx) => {
    ctx.store.injectReducer(reducer);
    return ctx.store.dispatch(fetchPost(ctx.match.params.id));
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
