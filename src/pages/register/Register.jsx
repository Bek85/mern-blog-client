import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './register.module.scss';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    try {
      const response = await axios.post('api/auth/register', {
        username,
        email,
        password,
      });
      response.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={classes.register}>
      <span className={classes.registerTitle}>Register</span>
      <form className={classes.registerForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={classes.registerBtn}>
          Register
        </button>
        <Link to="/login" className={classes.loginBtn}>
          Login
        </Link>
        {error && (
          <span
            style={{ textAlign: 'center', color: 'red', paddingTop: '10px' }}
          >
            Something went wrong...
          </span>
        )}
      </form>
    </div>
  );
}
