import preloader from "../../images/preloader.png";
import './Preloader.css';

function Preloader() {
    return (
        <img src={preloader} className = "circle-preloader" />
    )
}

export default Preloader;