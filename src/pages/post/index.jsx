import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInitialProps } from 'dace-plugin-redux';
import { fetchPost } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

@getInitialProps({
  reducer,
  promise: ({ store, match: { params } }) => store.dispatch(fetchPost(params.id))
})
@connect(state => state)
export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object
  };

  static defaultProps = {
    post: {}
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
