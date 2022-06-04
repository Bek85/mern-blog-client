import classes from './post.module.scss';

const {
  post,
  postImage,
  postInfo,
  postCategories,
  postCategory,
  postTitle,
  postDate,
  postDescription,
} = classes;

export default function Post() {
  return (
    <div className={post}>
      <img
        className={postImage}
        src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="post image"
      />
      <div className={postInfo}>
        <div className={postCategories}>
          <span className={postCategory}>Music</span>
          <span className={postCategory}>Life</span>
        </div>
        <span className={postTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className={postDate}>1 hour ago</span>
      </div>
      <p className={postDescription}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non sint
        repudiandae consectetur voluptates impedit molestiae perferendis unde!
        Rem impedit nobis nihil! Veritatis rem vitae non, quos atque quod,
        commodi facilis repellat officia suscipit ipsum beatae sunt
        necessitatibus tempore voluptas voluptates similique earum consequatur.
        Laudantium necessitatibus quisquam magnam. Consectetur iusto facere quod
        aperiam sit dicta quo, recusandae nihil sequi quasi neque. Sunt dolores
        deserunt adipisci fugit reiciendis harum assumenda obcaecati magnam
        alias. Amet, nulla omnis! Reprehenderit nesciunt ullam, iure consectetur
        temporibus maiores sapiente adipisci placeat explicabo quia at saepe
        expedita iste tenetur tempore maxime corrupti enim aut dignissimos
        soluta! Exercitationem, distinctio!
      </p>
    </div>
  );
}
