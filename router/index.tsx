import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Error, Login } from '../pages';

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />,
  },
]);
