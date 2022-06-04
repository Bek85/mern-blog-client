import classes from './header.module.scss';

const { header, headerTitles, headerTitleSm, headerTitleLg, headerImage } =
  classes;

export default function Header() {
  return (
    <div className={header}>
      <div className={headerTitles}>
        <span className={headerTitleSm}>React & Node</span>
        <span className={headerTitleLg}>Blog</span>
      </div>
      <img
        className={headerImage}
        src="https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="header image"
      />
    </div>
  );
}
