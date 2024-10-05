import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={`header ${props.borderBottom}`}>
            <div className="header__left-column">
                <img src={props.imageSrc} alt="news-explorer-logo" title="news-explorer-logo" className="header__logo"/>
            </div>

            <nav className="header__right-column">
                <Link to='/' type="button" className={`header__home-btn ${props.fontColor} ${props.homeBorder}`}>Home</Link>
                {props.isLoggedIn 
                ? 
                <>
                    <Link to="/saved-news" className={`header__saved-article ${props.fontColorSavedArticle} ${props.borderBottom2}`}>Saved articles</Link>
                    <button className={`header__profile ${props.fontColorProfile} ${props.border}`} onClick={props.handleLogOutButton}>Reynaldo Perez <img src={props.logoutSrc} alt="logout logo" className="header__logout"></img></button>
                </>
                : 
                    <button type="button" className={`header__signin ${props.fontColorSignin}`} onClick={props.handleModal}>Sign in</button>} 
            </nav>
        </header>
    )
}

export default Header;