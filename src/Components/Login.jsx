
import React, { useState } from 'react';
import {useNavigate,Link,useOutletContext} from "react-router-dom"

const Login = () => {
  const Navigate=useNavigate();
  //const { handleLogin } = useOutletContext();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLogin=(e)=>{
    e.preventDefault();
    console.log('Login Data:', formData);
   const loggedUser=JSON.parse(localStorage.getItem("user"));
  if(
    formData.email===loggedUser.email &&
    formData.password===loggedUser.password
  ){
    localStorage.setItem("loggedIn",true);
    Navigate("/Dashboard");
  }else{
    alert("wrong email or password");
  } 
}
// const login = () => {
//   handleLogin();
//   navigate('/dashboard');
// };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p
            className="mt-4 text-black-600"
          >
            Don't have an account? <Link to="/signup" className="mt-4 text-blue-600 hover:text-blue-800">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

