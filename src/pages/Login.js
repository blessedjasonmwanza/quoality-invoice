import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import logo from '../assets/img/logo.png';
import googleLogo from '../assets/img/google-logo.png';
import hero from '../assets/img/hero.png';

export default function Login() {
  const navigate = useNavigate();
  const attemptLogin = (e) => {
    e.preventDefault();
    navigate('/new');
  }
  return (
    <div className="login-container vh-center">
      <div className="login-card">
        <section className="login-section">
          <img src={logo} alt="Quoality Logo" />
          <h1>Invoice</h1>
          <p>Login to enjoy automating your business</p>
          <button className="continue-google vh-center"  type='button'>
            <img src={googleLogo} alt="Use google" title="Continue with google" />
            <span> Continue with Google </span>
          </button>
          <span className='alt-action'> Or Login with Email</span>
          <form className='login-form d-flex' id='login-form' onSubmit={(e) => attemptLogin(e)}>
            <label htmlFor="email">
              Email
              <input type="email" id="email" placeholder="Email" required autoComplete="username" />
            </label>

            <label htmlFor="password">
              Password
              <input type="password" id="password" placeholder='Password' required autoComplete="current-password" />
            </label>

            <div className='extra-cta d-flex'>
              <label htmlFor="remember" className='remember pointer'>
                <span>Remember me</span>
                <input type="checkbox" id="remember" />
              </label>
              <Link to="/signup">Create account</Link>
            </div>
            <button className="btn login-btn pointer">Login</button>
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
