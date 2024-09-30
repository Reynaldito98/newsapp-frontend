import './Footer.css';
import facebook from "../../images/Vector.svg";
import instagram from "../../images/Instagram.svg";
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className={`footer ${props.backgorundColor}`}>
            <p className="footer__site-info">&copy; 2024 Supersite, Powered by News API</p>

            <div className="footer__contact">
                <Link to="/" className="footer__home-btn">Home</Link>
                <p className="footer__tripleten">TripleTen</p>
                <img src={facebook} alt="facebook-logo" className="footer__facebook"></img>
                <img src={instagram} alt="instagram-logo" className="footer__instagram"></img>
            </div>
        </footer>    
    )
}

export default Footer;