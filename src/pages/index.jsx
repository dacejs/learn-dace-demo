import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Layout from '../layouts/default';

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

  static async getInitialProps() {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    const users = res.data;
    return { users };
  }

  render() {
    return (
      <Layout>
        <h1>User List</h1>
        <ol>
          {
            this.props.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ol>
      </Layout>
    );
  }
}
