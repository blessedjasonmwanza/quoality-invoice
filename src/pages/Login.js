import React from 'react'
import '../asserts/css/Login.css';
import logo from '../asserts/img/logo.png';
import googleLogo from '../asserts/img/google-logo.png'

export default function Login() {
  return (
    <div className="login-container vh-center">
        <div className="login-card">
            <section className="login-section">
                <img src={logo} alt="Quoality Logo" />
                <h1>Login to your account</h1>
                <p>Enjoy automating your business</p>
                <button className="continue-google vh-center">
                    <img src={googleLogo} alt="Use google" title="Continue with google" />
                    <span> Continue with Google</span>
                </button>
            </section>
            <aside className="brand-content">
            </aside>
        </div>
    </div>
  )
}
