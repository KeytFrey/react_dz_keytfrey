import './modal.css';
import FormModal from '../FormModal';

function Modal ({show}) {

    if(show) {
        return (
            <div className="modal" id="modal">
                <div className="modal_content">
                    <FormModal />
                    <button className="modal__close" type="button"></button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Modal;