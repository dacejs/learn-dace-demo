import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Head } from 'dace';
import axios from 'axios';
import Layout from '../layouts/default';

class Home extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  };

  static defaultProps = {
    users: []
  };

  async componentDidMount() {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    console.log('--res:', res);
    const users = res.data.map(({ id, name }) => ({ id, name }));
    return { users };
  }

  static async getInitialProps() {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    const users = res.data.map(({ id, name }) => ({ id, name }));
    return { users };
  }

  // static getInitialProps() {
  //   return {
  //     users: [
  //       { id: 1, name: 'aa' },
  //       { id: 2, name: 'bb' },
  //       { id: 3, name: 'cc' }
  //     ]
  //   };
  // }

  render() {
    console.log('--this.props:', this.props);
    const { users } = this.props;

    return (
      <Layout>
        <Head>
          <title>{`${users.length} users Loaded`}</title>
        </Head>
        <h1>User List</h1>
        <ul>
          {
            users.map(user => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </li>
            ))
          }
        </ul>
      </Layout>
    );
  }
}

export default Home;
