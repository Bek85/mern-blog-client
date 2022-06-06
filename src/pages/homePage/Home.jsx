import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from 'react-blog/components/header/Header';
import Posts from 'react-blog/components/posts/Posts';
import Sidebar from 'react-blog/components/sidebar/Sidebar';
import classes from './home.module.scss';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
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
