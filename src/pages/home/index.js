import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { prefetch, Link } from 'dace';
import { fetchMovies } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

function mapStateToProps(state) {
  return { movies: state.movies || [] };
}

@prefetch({
  key: 'movies',
  reducer,
  promise: ({ store: { dispatch } }) => Promise.all([
    dispatch(fetchMovies())
  ])
})
@connect(mapStateToProps, { fetchMovies })
export default class Home extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  };

  static defaultProps = {
    movies: []
  };

  head() {
    const { movies } = this.props;
    return (
      <Helmet>
        <title>{`${movies.length} movies Loaded`}</title>
      </Helmet>
    );
  }

  renderMovies() {
    const { movies } = this.props;
    return movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/post/${movie.id}`}>{movie.name}</Link>
      </li>
    ));
  }

  render() {
    return (
      <Layout>
        {this.head()}
        <h1>Batman TV Shows</h1>
        <ul>{this.renderMovies()}</ul>
      </Layout>
    );
  }
}
