const Header = () => {
  return (
    <header className="header">
      <img
        src="../../public/img/BugHeader.svg"
        alt="Bug Header Icon"
        className="header__icon"
      />
      <h1 className="header__title">
        DebugApp <span className="header__name">Keeper</span>
      </h1>
    </header>
  );
};

export default Header;
