import './LoginModal.css';
import closeButton from '../../images/back.svg'

function LoginModal(props) {
    return (
        <div className={`signin ${props.modalOpened?'signin_opened':''}`}>
            <div className="signin__container">
                <h2 className="signin__title">Sign in</h2>

                <form className="signin__form">
                    <label htmlFor="email2" className="signin__label">Email</label>
                    <input type="email" id="email2" placeholder="Enter email" name="email" className="signin__input"></input>
                    <label htmlFor="password2" className="signin__label signin__label_margin">Password</label>
                    <input type="password" id="password2" placeholder="Enter password" name="password" className="signin__input"></input>

                    <button className="signin__button">Sign in</button>
                </form>

                <div className="signin__or-signup">or <button className="signin__signup" onClick={props.handleRegisterOpen}>Sign up</button></div>
                <button className="signin__close-btn" onClick={props.onClose}><img src={closeButton} className="signin__close-img"></img></button>
            </div>
        </div>
    )
}

export default LoginModal;