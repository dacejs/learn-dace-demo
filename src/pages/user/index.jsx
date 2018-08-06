import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInitialProps } from 'dace-plugin-redux';
import { fetchUser } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

@getInitialProps({
  reducer,
  promise: ({ store: { dispatch }, match: { params } }) => dispatch(fetchUser(params.id))
})
@connect(state => state)
export default class User extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {
    user: {}
  }

  render() {
    const { user } = this.props;
    return (
      <Layout>
        <h1>User Detail</h1>
        <dl>
          <dt>id:</dt><dd>{user.id}</dd>
          <dt>name:</dt><dd>{user.name}</dd>
          <dt>username:</dt><dd>{user.username}</dd>
          <dt>email:</dt><dd>{user.email}</dd>
          <dt>phone:</dt><dd>{user.phone}</dd>
          <dt>website:</dt><dd>{user.website}</dd>
        </dl>
      </Layout>
    );
  }
}
