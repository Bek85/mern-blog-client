import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import classes from './login.module.scss';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await axios.post('/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className={classes.login}>
      <span className={classes.loginTitle}>Login</span>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="username"
          placeholder="Enter your username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className={classes.loginBtn}
          disabled={isFetching}
        >
          Login
        </button>
        <Link to="/register" className={classes.registerBtn}>
          Register
        </Link>
      </form>
    </div>
  );
}
