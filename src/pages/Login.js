import React from 'react'
import { Link } from 'react-router-dom';
import '../asserts/css/Login.css';
import logo from '../asserts/img/logo.png';
import googleLogo from '../asserts/img/google-logo.png'

export default function Login() {
  const attemptLogin = (e) => {
    e.preventDefault();
  }
  return (
    <div className="login-container vh-center">
        <div className="login-card">
            <section className="login-section">
                <img src={logo} alt="Quoality Logo" />
                <h1>Login to your account</h1>
                <p>Enjoy automating your business</p>
                <button className="continue-google vh-center">
                    <img src={googleLogo} alt="Use google" title="Continue with google" />
                    <span> Continue with Google </span>
                </button>
                <span  className='alt-action'> Or Login with Email</span>
                <form className='login-form d-flex' id='login-form'  onSubmit={(e) => attemptLogin(e)}>
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
                      <Link to="#">Forgot Password</Link>
                    </div>
                    <button className="btn login-btn pointer">Login</button>
                </form>
            </section>
            <aside className="brand-content">
              
            </aside>
        </div>
    </div>
  )
}
