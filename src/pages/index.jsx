import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dace';
import Layout from '../layouts/default';

const PostLink = props => (
  <li>
    <Link to={`/post/${props.id}`}>{props.title}</Link>
  </li>
);

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-dace" title="Hello Dace" />
      <PostLink id="learn-dace" title="Learn Dace is awesome" />
      <PostLink id="deploy-dace" title="Deploy apps with Jenkins" />
    </ul>
  </Layout>
);
