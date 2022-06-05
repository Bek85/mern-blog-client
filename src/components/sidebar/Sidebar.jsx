import classes from './sidebar.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaSearch,
} from 'react-icons/fa';

const {
  sidebar,
  sidebarItem,
  sidebarTitle,
  sidebarList,
  sidebarListItem,
  sidebarSocial,
  sidebarIcon,
  sidebarImage,
} = classes;
export default function Sidebar() {
  return (
    <div className={sidebar}>
      <div className={sidebarItem}>
        <span className={sidebarTitle}>About Me</span>
        <img
          className={sidebarImage}
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores
          nostrum consequuntur officia, inventore sequi dolorum porro laboriosam
          culpa eveniet fugit, laudantium ut fuga veritatis rerum, distinctio
          eligendi aut possimus quos dignissimos omnis qui.
        </p>
      </div>
      <div className={sidebarItem}>
        <span className={sidebarTitle}>Categories</span>
        <ul className={sidebarList}>
          <li className={sidebarListItem}>Life</li>
          <li className={sidebarListItem}>Music</li>
          <li className={sidebarListItem}>Style</li>
          <li className={sidebarListItem}>Sport</li>
          <li className={sidebarListItem}>Cinema</li>
          <li className={sidebarListItem}>Tech</li>
        </ul>
      </div>
      <div className={sidebarItem}>
        <span className={sidebarTitle}>Follow Us</span>
        <div className={sidebarSocial}>
          <FaFacebook className={sidebarIcon} />
          <FaTwitter className={sidebarIcon} />
          <FaPinterest className={sidebarIcon} />
          <FaInstagram className={sidebarIcon} />
        </div>
      </div>
    </div>
  );
}
