import './ModalWithForm.css';
import closeButton from '../../images/back.svg'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ModalWithForm(props) {
    function handleClick(evt) {
        props.onClose(evt);
    }

    function handleRemoteClick(evt){
        if (evt.target === evt.currentTarget) { 
            handleClick(evt);
        }
    }

    useEffect(() => {
        if (!props.modalOpened) return;
        const handleEscClose = (evt) => {
            if(evt.key === 'Escape') {
                handleClick(evt);    
            }
        }

        window.addEventListener('keydown', handleEscClose);
        return () => {
            window.removeEventListener("keydown", handleEscClose);
        };
    }, [props.modalOpened])

    return (
        <div className={`modal ${props.modalOpened?'modal_opened':''}`} onMouseDown={handleRemoteClick}>
            <div className="modal__container">
                <h2 className="modal__title">{props.title}</h2>

                {
                    props.showForm ?
                    <>
                        <form className="modal__form">
                            {props.children}

                            <button className="modal__button" disabled={!props.isValid}>{props.title}</button>
                        </form>
                        <div className="modal__switch">or <button className="modal__switch-link" onClick={props.onClick}>{props.switchText}</button></div>
                    </>
                    :
                    <button className="modal__signin">Sign in</button>
                }
                <button className="modal__close-btn" onClick={handleClick}><img src={closeButton} alt="close-button" className="modal__close-img"></img></button>
            </div>
        </div>
    )
}

export default ModalWithForm;