import classes from './write.module.scss';
import { FaPlus } from 'react-icons/fa';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from 'react-blog/context/Context';

export default function Write() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newPost = {
      title,
      description,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/api/upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axios.post('/api/posts', newPost);
      window.location.replace('/post/' + response.data._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.write}>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form onSubmit={handleSubmit} className={classes.writeForm}>
        <div className={classes.writeFormGroup}>
          <label htmlFor="fileInput">
            <FaPlus className={classes.writeIcon} />
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.writeFormGroup}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={classes.writeSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}
