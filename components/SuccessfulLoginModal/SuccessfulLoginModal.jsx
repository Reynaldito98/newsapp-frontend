import '../ModalWithForm/ModalWithForm.css';
import closeButton from '../../images/back.svg';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SuccessfulLoginModal() {
    return (
        <ModalWithForm showForm={false} title="Registration successfully completed!"></ModalWithForm>
    )
}

export default SuccessfulLoginModal;