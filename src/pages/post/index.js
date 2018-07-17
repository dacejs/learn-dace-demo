import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { prefetch } from 'dace';
import { fetchMovie } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

const defaultProps = {
  movie: {}
};

function mapStateToProps(state) {
  return { movie: state.post.data || defaultProps };
}

@prefetch({
  key: 'post',
  reducer,
  promise: ({ store: { dispatch }, match }) => dispatch(fetchMovie(match.params.id))
})
@connect(mapStateToProps, { fetchMovie })
export default class Post extends Component {
  static propTypes = {
    movie: PropTypes.object
  };

  static defaultProps = defaultProps;

  render() {
    const { name, summary, image } = this.props.movie;
    return (
      <Layout>
        <h1>{name}</h1>
        <p>{summary}</p>
        {image && <img alt={`${name}`} src={image.medium} />}
      </Layout>
    );
  }
}
