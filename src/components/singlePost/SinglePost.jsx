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

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(`/api/posts/${path}`);
      setPost(response.data);
    };

    fetchSinglePost();
  }, [path]);

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
        <h1 className={classes.singlePostTitle}>
          {post.title}
          {post.username === user.username && (
            <div className={classes.singlePostEdit}>
              <FaEdit className={classes.singlePostIcon} />
              <FaTrashAlt className={classes.singlePostIcon} />
            </div>
          )}
        </h1>
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
        <p className={classes.singlePostDescription}>{post.description}</p>
      </div>
    </div>
  );
}
