import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Components/Home.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Login from './Components/Login.jsx';
import Fresher from './Components/Fresher.jsx';
import Exprience from './Components/Exprience.jsx';
import ResumeReview from './Components/ResumeReview.jsx';  // Import the new component
import SignUp from './Components/SignUp.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       {/* <Route path='/' element={<ProtectedRoutes/>}>
        <Route index element={<Home/>}/>
        </Route> */}
      <Route index element={<Home />} />
      <Route path="fresher" element={<Fresher />} />
      <Route path="exprience" element={<Exprience />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="resume-review" element={<ResumeReview />} />  // Add the new route
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

