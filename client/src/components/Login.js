import React, { useState } from "react";
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [formValues, setFormValues] = useState({
    credentials: {
      username: '',
      password: '',
    }
  })

  const handleChange = (e) => {
    setFormValues({
      credentials: {
        ...formValues.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/')
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
      <div>
        use these credentials, they are valid
        username: 'Lambda School', password: ilessThanSymbol3Lambd4
        <form onSubmit={login}>
          <label>username</label>
          <input
            type="text"
            name="username"
            value={formValues.credentials.username}
            onChange={handleChange}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            value={formValues.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;
