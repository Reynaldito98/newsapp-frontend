import './Footer.css';
import facebook from "../../images/Vector.svg";
import instagram from "../../images/Instagram.svg";
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__site-info">&copy; 2024 Supersite, Powered by News API</p>

            <nav className="footer__contact">
                <div className="footer__link-container">
                    <Link to="/" className="footer__link" target="_blank">Home</Link>
                    <Link to="https://tripleten.com/" className="footer__link" target="_blank">TripleTen</Link>
                </div>
                <div className="footer__social-media-container">
                    <Link to="https://facebook.com/tripleten" target="_blank"><img src={facebook} alt="facebook-logo" className="footer__social-media"></img></Link>
                    <Link to="https://instagram.com/tripleten" target="_blank"><img src={instagram} alt="instagram-logo" className="footer__social-media"></img></Link>
                </div>
            </nav>
        </footer>  
    )
}

export default Footer;