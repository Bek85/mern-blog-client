import { Link } from 'react-router-dom';
import classes from './login.module.scss';

export default function Login() {
  return (
    <div className={classes.login}>
      <span className={classes.loginTitle}>Login</span>
      <form className={classes.loginForm}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className={classes.loginBtn}>Login</button>
        <Link to="/register" className={classes.registerBtn}>
          Register
        </Link>
      </form>
    </div>
  );
}
