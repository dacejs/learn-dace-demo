import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { prefetch, Link, Head } from 'dace';
import { fetchMovies } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

const defaultProps = {
  movies: []
};

function mapStateToProps(state) {
  return { movies: state.home.data || [] };
}

@prefetch({
  key: 'home',
  reducer,
  promise: ({ store: { dispatch } }) => dispatch(fetchMovies())
})
@connect(mapStateToProps, { fetchMovies })
export default class Home extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  };

  static defaultProps = defaultProps;

  render() {
    const { movies } = this.props;

    return (
      <Layout>
        <Head>
          <title>{`${movies.length} movies Loaded`}</title>
        </Head>
        <h1>Batman TV Shows</h1>
        <ul>
          {
            movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/post/${movie.id}`}>{movie.name}</Link>
              </li>
            ))
          }
        </ul>
      </Layout>
    );
  }
}
