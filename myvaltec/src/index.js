import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Project from './pages/projects/projects.jsx'
//import App from './App';
import Home from './home';
import Thinking from './pages/Thinking/src/Thinking.jsx'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:'/',
    element: <Home/>,
    errorElement:<div><h1>Developers are currently working on deploying the site. Page will be live soon.</h1></div>
  },
  {path:'/thinking',
    element: <Thinking/>},
    {
      path:'/projects',
      element: <Project/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);




//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
