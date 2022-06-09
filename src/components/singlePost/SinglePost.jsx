import classes from './singlePost.module.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from 'react-blog/context/Context';
import axios from 'axios';

export default function SinglePost() {
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const PF = 'http://localhost:4000/images/';
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(`/api/posts/${path}`);
      setPost(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
    };

    fetchSinglePost();
  }, [path, updateMode]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.singlePost}>
      <div className={classes.singlePostWrapper}>
        {post.photo && (
          <img
            src={PF + post.photo}
            alt=""
            className={classes.singlePostImage}
          />
        )}
        {updateMode ? (
          <input
            type="text"
            alt=""
            value={title}
            className={classes.singlePostTitleInput}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className={classes.singlePostTitle}>
            {post.title}
            {post.username === user?.username && (
              <div className={classes.singlePostEdit}>
                <FaEdit
                  className={classes.singlePostIcon}
                  onClick={() => setUpdateMode(true)}
                />
                <FaTrashAlt
                  className={classes.singlePostIcon}
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}

        <div className={classes.singlePostInfo}>
          <span className={classes.singlePostAuthor}>
            <Link to={`/?user=${post.username}`}>
              Author: <b>{post.username}</b>
            </Link>
          </span>
          <span className={classes.singlePostDate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={description}
            type="text"
            className={classes.singlePostDescriptionInput}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className={classes.singlePostDescription}>{post.description}</p>
        )}
        {updateMode && (
          <button onClick={handleEdit} className={classes.singlePostButton}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
