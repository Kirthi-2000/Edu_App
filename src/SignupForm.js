// src/SignupForm.js
import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SocialButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 10px;
  }
`;

const SignupForm = ({ setIsLogin }) => {
  return (
    <FormWrapper>
      <img src="logo.png" alt="Facit" style={{ width: '80px', marginBottom: '20px' }} />
      <div>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <h2>Create Account,</h2>
      <p>Sign up to get started!</p>
      <Input placeholder="Your email" />
      <Input placeholder="Your name" />
      <Input placeholder="Your surname" />
      <Input placeholder="Password" type="password" />
      <Button>Sign Up</Button>
      <p>OR</p>
      <SocialButton>
        <img src="apple-logo.png" alt="Apple" /> Sign in with Apple
      </SocialButton>
      <SocialButton>
        <img src="google-logo.png" alt="Google" /> Continue with Google
      </SocialButton>
    </FormWrapper>
  );
};

export default SignupForm;
