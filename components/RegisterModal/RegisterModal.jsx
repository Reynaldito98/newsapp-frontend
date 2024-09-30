import './RegisterModal.css';
import closeButton from '../../images/back.svg'

function RegisterModal(props) {
    return (
        <div className={`signup ${props.modalOpened?'signup_opened':''}`}>
            <div className="signup__container">
                <h2 className="signup__title">Sign up</h2>

                <form className="signup__form">
                    <label htmlFor="email" className="signup__label">Email</label>
                    <input type="email" id="email" placeholder="Enter email" name="email" className="signup__input"></input>
                    <label htmlFor="password" className="signup__label signup__label_margin">Password</label>
                    <input type="password" id="password" placeholder="Enter password" name="password" className="signup__input"></input>
                    <label htmlFor="username" className="signup__label signup__label_margin">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" name="username" className="signup__input"></input>

                    <button type="submit" className="signup__button">Sign up</button>
                </form>

                <div className="signup__or-signin">or <button className="signup__signin" onClick={props.handleLoginOpen}>Sign in</button></div>
                <button className="signup__close-btn" onClick={props.onClose}><img src={closeButton} className="signup__close-img"></img></button>
            </div>
        </div>
    )
}

export default RegisterModal;