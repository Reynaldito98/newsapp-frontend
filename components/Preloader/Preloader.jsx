import preloader from "../../images/preloader.png";
import './Preloader.css';

function Preloader() {
    return (
        <img src={preloader} alt="preloader" className = "circle-preloader" />
    )
}

export default Preloader;