import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import '../style/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeIcon from '../assets/sigle1.png';
import { loginUser } from '../api/api'; // Import the API function correctly

const Login = () => {
  const navigate = useNavigate(); // For navigation
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Update state when form fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      console.log('Form Data:', formData); // Log data to check before API call
      const response = await loginUser(formData); // Call the API
      console.log('Login successful:', response);
      navigate('/home'); // Redirect to home on success
    } catch (error) {
      console.error('Error during login:', error?.response?.data || error.message);
      alert('Login failed. Please check your email and password.');
    }
  };


  return (
    <div className="login-page1">
      <Navbar />

      {/* Welcome Icon */}
      <div
        className="welcome-icon1"
        style={{
          position: 'absolute',
          top: '0%',
          left: '45%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <img src={WelcomeIcon} alt="Welcome Icon" />
      </div>

      {/* Form */}
      <form className="custom-form1 mt-5" onSubmit={handleSubmit}>
        <h3 className="text-center">
          Welcome <br /> Back!
        </h3>

        {/* Email Field */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email} // Bind state
              onChange={handleInputChange} // Update state
              placeholder="Email*"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password} // Bind state
              onChange={handleInputChange} // Update state
              placeholder="Password*"
              required
            />
          </div>
        </div>

        {/* Forget Password Link */}
        <div className="text-center mt-2">
          <p className="negative-margin1">
            <Link to="/forget-password">Forget password?</Link>
          </p>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-mauve1 login">
          Login
        </button>

        {/* Sign-Up Text */}
        <div className="text-center mt-3">
          <p className="negative-margin2">
            <Link to="/register">Don't have an account?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
