import './UnsuccessfulSearch.css';
import sad from '../../images/sad.png';

function UnsuccessfulSearch() {
    return (
        <div className="unsuccessful">
            <img src={sad} className="unsuccessful__image"></img>
            <p className="unsuccessful__description">Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</p>
        </div>
    )
}

export default UnsuccessfulSearch;