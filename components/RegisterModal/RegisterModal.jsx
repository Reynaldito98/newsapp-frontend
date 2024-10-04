import '../ModalWithForm/ModalWithForm.css';
import closeButton from '../../images/back.svg'
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';

function RegisterModal(props) {
    const [emailValid, setEmailValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [usernameValid, setUsernameValid] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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

    function handleUsernameInput(evt) {
        setUsername(evt.target.value);

        if(evt.target.checkValidity()) {
            setUsernameValid(true);
            setUsernameErrorMessage('')
        } else{
            setUsernameValid(false);
            setUsernameErrorMessage(evt.target.validationMessage);
        }
    }

    return (
        <ModalWithForm modalOpened={props.modalOpened} title="Sign up" switchText="Sign in" onClick={props.handleLoginOpen} onClose={props.onClose} isValid={emailValid && passwordValid && usernameValid}>
            <fieldset className="modal__fieldset">
                <label htmlFor="email" className="modal__label">Email</label>
                <input type="email" id="email" placeholder="Enter email" name="email" className="modal__input" required onChange={handleEmailInput} value={email} ></input>
                <span className="modal__error-message">{emailErrorMessage}</span>  
            </fieldset>               
            
            <fieldset className="modal__fieldset">
                <label htmlFor="password" minLength="2" className="modal__label modal__label_margin">Password</label>
                <input type="password" id="password" placeholder="Enter password" name="password" className="modal__input" required onChange={handlePasswordInput} minLength="2" value={password}></input>
                <span className="modal__error-message">{passwordErrorMessage}</span> 
            </fieldset>
            
            <fieldset className="modal__fieldset">
                <label htmlFor="username" className="modal__label modal__label_margin">Username</label>
                <input type="text" id="username" placeholder="Enter your username" name="username" className="modal__input" minLength="3" maxLength="20" required onChange={handleUsernameInput} value={username}></input>
                <span className="modal__error-message">{usernameErrorMessage}</span> 
            </fieldset>
        </ModalWithForm>
    )
}

export default RegisterModal;