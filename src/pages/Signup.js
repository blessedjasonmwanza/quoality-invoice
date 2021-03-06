import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import '../assets/css/Signup.css';
import logo from '../assets/img/logo.png';
import googleLogo from '../assets/img/google-logo.png';
import hero from '../assets/img/hero.png';

export default function Signup() {
  const navigate = useNavigate();
  const attemptSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }
  return (
    <div className="login-container vh-center">
      <div className="login-card signup-card">
        <section className="login-section signup-section">
          <img src={logo} alt="Quoality Logo" />
          <h1>Invoice</h1>
          <p>Signup to enjoy automating your business</p>
          <form className='login-form signup-form d-flex' id='login-form' onSubmit={(e) => attemptSignup(e)}>
            <div className='signup-names'>
              <label htmlFor='first-name'>
                First name
                <input type="text" id="first-name" placeholder="First Name" required autoComplete="first-name" />
              </label>
              <label htmlFor='last-name'>
                Last name
                <input type="text" id="last-name" placeholder="Last Name" required autoComplete="last-name" />
              </label>
            </div>
            <label htmlFor="email">
              Email
              <input type="email" id="email" placeholder="Email" required autoComplete="email" />
            </label>

            <label htmlFor="password">
              Password
              <input type="password" id="password" placeholder='Password' required autoComplete="current-password" />
            </label>
            <div className='extra-cta d-flex'>
              <span />
              <span>
                Already have an account? &nbsp; 
                <Link to="/login">Login now</Link>
              </span>
              
            </div>
            <button className="btn login-btn pointer">Create account</button>
            <span className='alt-action'> Or </span>
            <button className="continue-google vh-center" type='button'>
              <img src={googleLogo} alt="Use google" title="Continue with google" />
              <span> Continue with Google </span>
            </button>

          </form>
        </section>
        <aside className="brand-content">
          <img src={hero} alt="Hero" />
          <p>
            Hotel Revenue. Create Personalized Experiences to Engage, Upsell, and Attract Customers.
          </p>
        </aside>
      </div>
    </div>
  )
}
