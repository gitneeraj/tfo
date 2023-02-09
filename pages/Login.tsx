import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from '../assets/svg';
import '../style.scss';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };
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
        <button type="button" onClick={handleLogin}>
          Login <ChevronRight />
        </button>
      </div>
    </div>
  );
}
