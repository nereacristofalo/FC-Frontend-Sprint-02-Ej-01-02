import React from 'react';
import './LoginPage.css';
import Title from '../../components/Title/Title';
import LoginForm from '../../components/LoginForm/LoginForm';
import LoginFooter from '../../components/LoginFooter/LoginFooter';

const LoginPage = () => {
  return (
    <div className="login-container">
      <Title />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
