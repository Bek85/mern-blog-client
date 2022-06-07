import classes from './singlePost.module.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];

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
        <img
          className={classes.singlePostImage}
          src="https://images.pexels.com/photos/736842/pexels-photo-736842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="singlePost image"
        />
        <h1 className={classes.singlePostTitle}>
          {post.title}
          <div className={classes.singlePostEdit}>
            <FaEdit className={classes.singlePostIcon} />
            <FaTrashAlt className={classes.singlePostIcon} />
          </div>
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
