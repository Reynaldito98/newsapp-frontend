import './NavigationMenu.css';
import Header from '../Header/Header';
import closeButton from '../../images/back.svg';
import newsLogo from "../../images/NewsExplorer.svg";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
    function handleClick(evt) {
        props.handleNavigationModal(evt);
    }

    function handleRemoteClick(evt){
        if (evt.target === evt.currentTarget) { 
            handleClick(evt);
        }
    }

    useEffect(() => {
        if (!props.navigationModalOpened) return;
        const handleEscClose = (evt) => {
            if(evt.key === 'Escape') {
                handleClick(evt);    
            }
        }

        window.addEventListener('keydown', handleEscClose);
        return () => {
            window.removeEventListener("keydown", handleEscClose);
        };
    }, [props.navigationModalOpened])

    return (
        <div className={`navigation-menu ${props.navigationModalOpened?'navigation-menu_opened':''}`} onMouseDown={handleRemoteClick}>
            <div className="navigation-menu__container">
                <Header menu={closeButton} imageSrc={newsLogo} borderBottom={'header_border-bottom-color_gray'} handleNavigationModal={props.handleNavigationModal}></Header>

                <nav className="navigation-menu__link-container">
                    <Link to='/' type="button" className="navigation-menu__link">Home</Link>
                    {props.isLoggedIn 
                    ? 
                    <>
                        <Link to="/saved-news" className="navigation-menu__link">Saved articles</Link>
                        <button className="navigation-menu__profile" onClick={props.handleLogOutButton}>Reynaldo Perez <img src={props.logoutSrc} alt="logout logo" className="header__logout"></img></button>
                    </>
                    : 
                        <button type="button" className="navigation-menu__profile" onClick={props.handleModal}>Sign in</button>} 
                </nav>
            </div>
        </div>
    )
}

export default NavigationMenu;