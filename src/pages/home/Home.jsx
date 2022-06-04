import Header from 'react-blog/components/header/Header';
import Posts from 'react-blog/components/posts/Posts';
import Sidebar from 'react-blog/components/sidebar/Sidebar';
import classes from './home.module.scss';

const { home } = classes;

export default function Home() {
  return (
    <>
      <Header />
      <div className={home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
