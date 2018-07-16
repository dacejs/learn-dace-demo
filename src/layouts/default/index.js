import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

export default Layout;
