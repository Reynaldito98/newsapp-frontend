import './SuccessfulLoginModal.css';
import closeButton from '../../images/back.svg'

function SuccessfulLoginModal() {
    return (
        <div className="successful-login">
            <div className="successful-login__container">
                <h2 className="successful-login__title">Registration successfully completed!</h2>

                <a href="" className="successful-login__signin">Sign in</a>
                <button className="successful-login__close-btn"><img src={closeButton} alt="close button" className="successful-login__close-img"></img></button>
            </div>
        </div>
    )
}

export default SuccessfulLoginModal;