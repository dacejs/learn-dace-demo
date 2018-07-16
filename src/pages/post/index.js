import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { prefetch } from 'dace';
import { fetchMovie } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

function mapStateToProps(state) {
  return { movie: state.movie || {} };
}

@prefetch({
  key: 'movie',
  reducer,
  promise: ({ store: { dispatch }, match }) => Promise.all([
    dispatch(fetchMovie(match.params.id))
  ])
})
@connect(mapStateToProps, { fetchMovie })
export default class Post extends Component {
  static propTypes = {
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string
    })
  };

  static defaultProps = {
    name: '',
    summary: '',
    image: {
      medium: ''
    }
  };

  render() {
    const { name, summary, image } = this.props;
    return (
      <Layout>
        <h1>{name}</h1>
        <p>{summary}</p>
        <img alt={`${name}`} src={image.medium} />
      </Layout>
    );
  }
}
