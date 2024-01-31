// App.js
import React from 'react';
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Switch} from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<ShowList/>
    },
    {
      path:"/show/:id",
      element:<ShowDetails/>
    }
  ])
  return <RouterProvider router={router} />;


}

export default App;
