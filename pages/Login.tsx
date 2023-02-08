import * as React from 'react';
import '../style.scss';

export default function Login() {
  return (
    <div className="login card">
      <h2>Welcome back!</h2>
      <h3>Login to The Family Office to continue.</h3>
      <div className="login-box">
        <label htmlFor="email">
          Email/Username
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" id="password" />
        </label>
        <button type="button">Login</button>
      </div>
    </div>
  );
}
