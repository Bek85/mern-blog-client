import classes from './topBar.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Context } from 'react-blog/context/Context';
import { useContext } from 'react';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:4000/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className={classes.topBar}>
      <div className={classes.topLeft}>
        <FaFacebook className={classes.topIcon} />
        <FaTwitter className={classes.topIcon} />
        <FaPinterest className={classes.topIcon} />
        <FaInstagram className={classes.topIcon} />
      </div>
      <div className={classes.topCenter}>
        <ul className={classes.topList}>
          <li className={classes.topListItem}>
            <Link to="/">HOME</Link>
          </li>
          <li className={classes.topListItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={classes.topListItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={classes.topListItem}>
            <Link to="/write">Write</Link>
          </li>
          <li onClick={handleLogout} className={classes.topListItem}>
            {user && 'Log Out'}
          </li>
        </ul>
      </div>
      <div className={classes.topRight}>
        {user ? (
          <Link to="/settings">
            <img
              className={classes.topImage}
              src={PF + user.profilePic}
              alt="profile"
            />
          </Link>
        ) : (
          <ul className={classes.topList}>
            <li className={classes.topListItem}>
              <Link to="/login">LOGIN</Link>
            </li>
            <li className={classes.topListItem}>
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <FaSearch className={classes.topSearchIcon} />
      </div>
    </div>
  );
}
