import Post from 'react-blog/components/post/Post';
import classes from './posts.module.scss';

const { posts } = classes;

export default function Posts() {
  return (
    <div className={posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
