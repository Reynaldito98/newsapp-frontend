import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={`header ${props.borderBottom}`}>
            <div className="header__left-column">
                <img src={props.imageSrc} alt="news-explorer-logo" title="news-explorer-logo" className="header__logo"/>
            </div>

            <div className="header__right-column">
                <Link to='/' type="button" className={`header__home-btn ${props.fontColor}`}>Home</Link>
                {props.isLoggedIn 
                ? 
                <>
                    <Link to="/saved-news" className={`header__saved-article ${props.fontColor} ${props.borderBottom2}`}>Saved articles</Link>
                    <button className={`header__profile ${props.fontColor} ${props.border}`} onClick={props.handleLogOutButton}>Reynaldo Perez <img src={props.logoutSrc} alt="logout" className="header__logout"></img></button>
                </>
                : 
                    <button type="button" className={`header__signin ${props.fontColor}`} onClick={props.handleModal}>Sign in</button>} 
            </div>
        </header>
    )
}

export default Header;