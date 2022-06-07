import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from 'react-blog/components/header/Header';
import Posts from 'react-blog/components/posts/Posts';
import Sidebar from 'react-blog/components/sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import classes from './home.module.scss';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('api/posts' + search);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className={classes.home}>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
