import classes from './register.module.scss';

export default function Register() {
  return (
    <div className={classes.register}>
      <span className={classes.registerTitle}>Register</span>
      <form className={classes.registerForm}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className={classes.registerBtn}>Register</button>
        <button className={classes.loginBtn}>Login</button>
      </form>
    </div>
  );
}
