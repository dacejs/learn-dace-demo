import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/default';

const Post = (props) => {
  const { query } = props.location;
  return (
    <Layout>
      <h1>{query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

Post.propTypes = {
  location: PropTypes.object.isRequired
};

export default Post;
