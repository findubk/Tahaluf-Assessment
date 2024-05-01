import React from 'react';

import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';

import Home from 'src/pages/Home/Home';

function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<Navigate to='/list' replace />} />
      <Route path='/list' element={<Home />} />
      <Route path='*' element={<Navigate to='/list' replace />} />
    </ReactRoutes>
  );
}

export default Routes;
