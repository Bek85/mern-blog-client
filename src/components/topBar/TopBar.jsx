import classes from './topBar.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const {
  topBar,
  topLeft,
  topIcon,
  topCenter,
  topList,
  topListItem,
  topRight,
  topImage,
  topSearchIcon,
} = classes;

export default function TopBar() {
  const user = false;
  return (
    <div className={topBar}>
      <div className={topLeft}>
        <FaFacebook className={topIcon} />
        <FaTwitter className={topIcon} />
        <FaPinterest className={topIcon} />
        <FaInstagram className={topIcon} />
      </div>
      <div className={topCenter}>
        <ul className={topList}>
          <li className={topListItem}>
            <Link to="/">HOME</Link>
          </li>
          <li className={topListItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={topListItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={topListItem}>
            <Link to="/write">Write</Link>
          </li>
          <li className={topListItem}>{user && 'Log Out'}</li>
        </ul>
      </div>
      <div className={topRight}>
        {user ? (
          <img
            className={topImage}
            src="https://images.pexels.com/photos/5231575/pexels-photo-5231575.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="profile"
          />
        ) : (
          <ul className={topList}>
            <li className={topListItem}>
              <Link to="/login">LOGIN</Link>
            </li>
            <li className={topListItem}>
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <FaSearch className={topSearchIcon} />
      </div>
    </div>
  );
}
