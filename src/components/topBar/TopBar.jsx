import classes from './topBar.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaSearch,
} from 'react-icons/fa';

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
          <li className={topListItem}>HOME</li>
          <li className={topListItem}>About</li>
          <li className={topListItem}>Contact</li>
          <li className={topListItem}>Write</li>
          <li className={topListItem}>Log Out</li>
        </ul>
      </div>
      <div className={topRight}>
        <img
          className={topImage}
          src="https://images.pexels.com/photos/5231575/pexels-photo-5231575.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="profile"
        />
        <FaSearch className={topSearchIcon} />
      </div>
    </div>
  );
}
