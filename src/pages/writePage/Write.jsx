import classes from './write.module.scss';
import { FaPlus } from 'react-icons/fa';

export default function Write() {
  return (
    <div className={classes.write}>
      <img
        className={classes.writeImage}
        src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <form className={classes.writeForm}>
        <div className={classes.writeFormGroup}>
          <label htmlFor="fileInput">
            <FaPlus className={classes.writeIcon} />
          </label>
          <input type="file" id="fileInput" />
          <input type="text" placeholder="Title" autoFocus={true} />
        </div>
        <div className={classes.writeFormGroup}>
          <textarea placeholder="Tell your story..." type="text"></textarea>
        </div>
        <button className={classes.writeSubmit}>Publish</button>
      </form>
    </div>
  );
}
