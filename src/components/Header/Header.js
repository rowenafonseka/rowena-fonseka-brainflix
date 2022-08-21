import BrainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="/">
          <img
            className="header__logo"
            src={BrainflixLogo}
            alt="brainflix-logo"
          />
        </a>
        <div className="header__searchContainer">
          <input
            className="header__search"
            type="search"
            placeholder="Search"
          />
          <img className="header__avatar" src={Mohan} alt="avatar" />
        </div>

        <button className="header__btn">Upload</button>
      </nav>
    </header>
  );
}

export default Header;
