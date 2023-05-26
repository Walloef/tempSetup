import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { preload } from 'swr';

import App from './App.tsx';
import Users from './pages/Users.tsx';
import User from './pages/User.tsx';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Posts.tsx';
import {
  getPosts,
  postsUrlEndpoint as postsCacheKey,
} from './api/posts.ts';

const router =
  createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <App />
        }
      >
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='users'
          element={
            <Users />
          }
        />
        <Route
          path='users/:userId'
          element={
            <User />
          }
        />
        <Route
          path='posts'
          element={
            <Products />
          }
        />
        <Route
          path='/404'
          element={
            <NotFound />
          }
        />
        <Route
          path='*'
          element={
            <Navigate to='/404' />
          }
        />
      </Route>
    )
  );

preload(
  postsCacheKey,
  getPosts
);

ReactDOM.createRoot(
  document.getElementById(
    'root'
  ) as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider
      router={
        router
      }
    />
  </React.StrictMode>
);
