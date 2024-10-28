import Preloader from '../Preloader/Preloader';  
import './Searching.css';

function Searching() {
    return (
        <div className="searching">
            <Preloader />
            <p className="searching__description">Searching for news...</p>
        </div>
    )
}

export default Searching;