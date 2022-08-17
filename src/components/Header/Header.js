import BrainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/Icons/upload.svg";
import "./Header.scss";



function Header () {
    return (
        <header className="header">
            <nav className="header__nav">
                <img className="header__logo" src={BrainflixLogo} alt="brainflix-logo" />
                <div className="header__searchContainer">
                    <input className="header__search" type="search" placeholder="Search"/>
                    <img className="header__avatar" src={Mohan} alt="avatar" />
                </div>
               
                <button className="header__btn"><img className="header__btn--icon" src={UploadIcon} alt="upload icon"/>Upload</button>
               
            </nav>  
        </header>


    );
}

export default Header;