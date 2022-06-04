import classes from './singlePost.module.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const {
  singlePost,
  singlePostImage,
  singlePostWrapper,
  singlePostTitle,
  singlePostEdit,
  singlePostIcon,
  singlePostInfo,
  singlePostAuthor,
  singlePostDate,
  singlePostDescription,
} = classes;

export default function SinglePost() {
  return (
    <div className={singlePost}>
      <div className={singlePostWrapper}>
        <img
          className={singlePostImage}
          src="https://images.pexels.com/photos/736842/pexels-photo-736842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="singlePost image"
        />
        <h1 className={singlePostTitle}>
          Lorem ipsum dolor sit amet.
          <div className={singlePostEdit}>
            <FaEdit className={singlePostIcon} />
            <FaTrashAlt className={singlePostIcon} />
          </div>
        </h1>
        <div className={singlePostInfo}>
          <span className={singlePostAuthor}>
            Author: <b>Alex</b>
          </span>
          <span className={singlePostDate}>1 hour ago</span>
        </div>
        <p className={singlePostDescription}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque
          tenetur dolorem nulla nostrum veniam tempora. Et accusantium quos
          libero quidem culpa voluptatibus tempore error facere, illo eos
          accusamus quae tempora ratione voluptates non architecto magni nisi
          nostrum ipsum necessitatibus nemo. Eos dolor suscipit praesentium quos
          velit libero animi atque fugiat totam pariatur. Enim id dolorum
          deleniti voluptate, nesciunt quisquam corporis voluptas, sequi, harum
          repudiandae blanditiis? Asperiores inventore iure magnam dolores in
          error quos reprehenderit esse laboriosam nulla repellat, eius
          necessitatibus labore, itaque perferendis dolorem, recusandae aliquid
          quis incidunt laborum nobis eveniet quae eum! Culpa explicabo incidunt
          aliquam saepe reiciendis!
        </p>
      </div>
    </div>
  );
}
