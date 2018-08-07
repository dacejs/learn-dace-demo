import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'dace';
import { fetchUsers } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';

@connect(state => state)
export default class Index extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  };

  static defaultProps = {
    users: []
  }

  static getInitialProps = (ctx) => {
    ctx.store.injectReducer(reducer);
    return ctx.store.dispatch(fetchUsers());
  }

  render() {
    return (
      <Layout>
        <h1>User List</h1>
        <ol>
          {
            this.props.users.map(user => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </li>
            ))
          }
        </ol>
      </Layout>
    );
  }
}
