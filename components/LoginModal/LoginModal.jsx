import ModalWithForm from '../ModalWithForm/ModalWithForm';
import '../ModalWithForm/ModalWithForm.css';
import { useState } from 'react';

function LoginModal(props) {
    const [emailValid, setEmailValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function handleEmailInput(evt) {
        setEmail(evt.target.value);

        if(evt.target.checkValidity()) {
            setEmailValid(true);
            setEmailErrorMessage('')
        } else {
            setEmailValid(false);
            if(evt.target.value.length>=1 && !evt.target.value.includes('@')) {
                setEmailErrorMessage('Please, include an @ in the email address.')
            } else {
                setEmailErrorMessage(evt.target.validationMessage);
            }
        }
    }
    
    function handlePasswordInput(evt) {
        setPassword(evt.target.value);

        if(evt.target.checkValidity()) {
            setPasswordValid(true);
            setPasswordErrorMessage('')
        } else{
            setPasswordValid(false);
            setPasswordErrorMessage(evt.target.validationMessage);
        }
    }

    return (
        <ModalWithForm modalOpened={props.modalOpened} title="Sign in" switchText="Sign up" onClick={props.handleRegisterOpen} onClose={props.onClose} isValid={emailValid && passwordValid}>
            <fieldset className="modal__fieldset">
                <label htmlFor="email2" className="modal__label">Email</label>
                <input type="email" id="email2" placeholder="Enter email" value={email} name="email" className="modal__input" onChange={handleEmailInput} required></input>
                <span className="modal__error-message">{emailErrorMessage}</span> 
            </fieldset>               
            <fieldset className="modal__fieldset">
                <label htmlFor="password2" className="modal__label modal__label_margin">Password</label>
                <input type="password" id="password2" placeholder="Enter password" name="password" value={password} className="modal__input" onChange={handlePasswordInput} required minLength="2"></input>
                <span className="modal__error-message">{passwordErrorMessage}</span>
            </fieldset>
        </ModalWithForm>
    )
}

export default LoginModal;