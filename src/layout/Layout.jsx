import React from 'react';

import './layout.scss';
function Layout({ pageHeading, children }) {
  return (
    <div>
      <header className='header'>
        <span className='page-heading'>{pageHeading}</span>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
