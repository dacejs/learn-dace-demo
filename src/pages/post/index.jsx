import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/default';

const getPostById = id => ({
  'hello-dace': 'Hello Dace',
  'learn-dace': 'Learn Dace is awesome',
  'deploy-dace': 'Deploy apps with Jenkins'
}[id]);

const Post = (props) => {
  const { params } = props.match;
  const title = getPostById(params.id);
  return (
    <Layout>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

Post.propTypes = {
  match: PropTypes.object.isRequired
};

export default Post;
