import './modal.css';

import React from 'react';
import FormModal from '../FormModal';

class Modal extends React.Component {

    render() {
        return (
            <div className="modal" id="modal">
                <div className="modal_content">
                    <FormModal />
                    <button className="modal__close" type="button"></button>
                </div>
            </div>
        )
    }
}

export default Modal;