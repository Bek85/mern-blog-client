import classes from './settings.module.scss';
import Sidebar from 'react-blog/components/sidebar/Sidebar';
import { FaUserCircle } from 'react-icons/fa';

export default function Settings() {
  return (
    <div className={classes.settings}>
      <div className={classes.settingsWrapper}>
        <div className={classes.settingsTitle}>
          <span className={classes.settingsUpdateTitle}>
            Update Your Account
          </span>
          <span className={classes.settingsDeleteTitle}>Delete Account</span>
        </div>
        <form className={classes.settingsForm}>
          <label>Profile Picture</label>
          <div className={classes.settingsPP}>
            <img
              src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile picture"
            />
            <label htmlFor="fileInput">
              <FaUserCircle className={classes.settingsPPIcon} />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Alex" />
          <label>Email</label>
          <input type="email" placeholder="stx.webdev@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className={classes.settingsSubmit}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
