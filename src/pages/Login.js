import React from 'react'
import '../asserts/css/Login.css';
import logo from '../asserts/img/logo.png';
import googleLogo from '../asserts/img/google-logo.png'
import { Link } from 'react-router-dom';

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
                <span for='login-form' className='alt-action'> Or Login with Email</span>
                <form className='login-form d-flex' id='login-form'  onSubmit={(e) => attemptLogin(e)}>
                    <label for="email">
                      Email
                      <input type="email" id="email" placeholder="Email" required />
                    </label>
                    
                    <label for="password">
                      Password
                      <input type="password" id="password" placeholder='Password' required />
                    </label>
                    
                    <div className='extra-cta d-flex'>
                      <label for="remember" className='remember pointer'>
                        <span for="remember">Remember me</span>
                        <input type="checkbox" id="remember"/>
                      </label>
                      <Link to="#">Forgot Password</Link>
                    </div>
                    <button className="btn login-btn pointer">Login</button>
                </form>
            </section>
            <aside className="brand-content">
              coming soon
            </aside>
        </div>
    </div>
  )
}
