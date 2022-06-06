import Post from 'react-blog/components/post/Post';
import classes from './posts.module.scss';

export default function Posts({ posts }) {
  return (
    <div className={classes.posts}>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
}
