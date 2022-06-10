import classes from './settings.module.scss';
import Sidebar from 'react-blog/components/sidebar/Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Context } from 'react-blog/context/Context';
import axios from 'axios';

export default function Settings() {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const PF = 'http://localhost:4000/images/';

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/api/upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.put(`api/users/${user._id}`, updatedUser);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.settings}>
      <div className={classes.settingsWrapper}>
        <div className={classes.settingsTitle}>
          <span className={classes.settingsUpdateTitle}>
            Update Your Account
          </span>
          <span className={classes.settingsDeleteTitle}>Delete Account</span>
        </div>
        <form onSubmit={handleSubmit} className={classes.settingsForm}>
          <label>Profile Picture</label>
          <div className={classes.settingsPP}>
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="profile picture"
            />
            <label htmlFor="fileInput">
              <FaUserCircle className={classes.settingsPPIcon} />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={classes.settingsSubmit}>
            Update
          </button>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', marginTop: 15 }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
