import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dace';
import Layout from '../layouts/default';

const PostLink = props => (
  <li>
    <Link to={`/post?title=${props.title}`}>{props.title}</Link>
  </li>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Dace" />
      <PostLink title="Learn Dace is awesome" />
      <PostLink title="Deploy apps with Jenkins" />
    </ul>
  </Layout>
);
