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
        <button className={classes.registerBtn}>Register</button>
      </form>
    </div>
  );
}
