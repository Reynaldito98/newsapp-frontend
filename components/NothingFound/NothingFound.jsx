import notFound from '../../images/not-found.svg';  
import './NothingFound.css';

function NothingFound(props) {
    return (
        <div className="nothing-found">
            <img src={notFound} alt="nothing found icon" className="nothing-found__icon" />
            <h2 className="nothing-found__heading">{props.title}</h2>
            <p className="nothing-found__description">{props.message}</p>
        </div>
    )
}

export default NothingFound;