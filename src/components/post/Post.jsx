import classes from './post.module.scss';

export default function Post({ post }) {
  return (
    <div className={classes.post}>
      {post.photo && (
        <img className={classes.postImage} src={post.photo} alt="post photo" />
      )}
      {/* <img
        className={classes.postImage}
        src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="post image"
      /> */}
      <div className={classes.postInfo}>
        <div className={classes.postCategories}>
          <span className={classes.postCategory}>Music</span>
          <span className={classes.postCategory}>Life</span>
        </div>
        <span className={classes.postTitle}>{post.title}</span>
        <hr />
        <span className={classes.postDate}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className={classes.postDescription}>{post.description}</p>
    </div>
  );
}
