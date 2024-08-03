import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/Logo.png';
//import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn, handleLogout }) {
  // const Navigate=useNavigate();
  // const userName=JSON.parse(localStorage.getItem("user"));
  // const handleLogout =()=>{
  //     localStorage.removeItem("logged");
  //     Navigate("/login");
  // }
  return (
    <div className='flex justify-between items-center h-20 px-5 shadow-md sticky z-40 top-0 rounded-3xl'>
      <img src={img1} className='h-20 rounded-3xl' alt='Logo' />
      <div className='flex gap-4'>
        <Link to={'/resume-review'}>
          <button className='border-2 h-10 w-32 rounded-md bg-blue-500 text-white shadow-md shadow-slate-600 hover:shadow-none'>
            Resume Review
          </button>
        </Link>
        {!isLoggedIn ? (
          <>
            <Link to={'/login'}>
              <button className='border-2 h-10 w-20 rounded-md bg-green-500 text-white shadow-md shadow-slate-600 hover:shadow-none'>Login</button>
            </Link>
            <Link to={'/signup'}>
              <button className='border-2 h-10 w-20 rounded-md bg-green-500 text-white shadow-md shadow-slate-600 hover:shadow-none'>SignUp</button>
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className='border-2 h-10 w-20 rounded-md bg-red-500 text-white shadow-md shadow-slate-600 hover:shadow-none'>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Header;
