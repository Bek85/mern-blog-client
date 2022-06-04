import classes from './singlePage.module.scss';
import Sidebar from 'react-blog/components/sidebar/Sidebar';
import SinglePost from 'react-blog/components/singlePost/SinglePost';

const { singlePage } = classes;

export default function SinglePage() {
  return (
    <div className={singlePage}>
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}
