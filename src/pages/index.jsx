import React from 'react';
import { Link, Head } from 'dace';

export default () => (
  <div>
    <Head>
      <title>Hello Dace</title>
    </Head>
    <h1>Hello Dace</h1>
    <Link to="/about">About Page</Link>
  </div>
);
