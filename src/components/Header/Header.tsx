import Circle from '../Dashboard/Circle/Circle';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__left">
        Hi Arthur, welcome! You have 12 open tasks.
      </h1>

      <div className="header__right">
        <div className="search">
          <input type="text" className="search__input" placeholder="search" />
        </div>

        <Circle abbr={'ar'} />
      </div>
    </header>
  );
}
