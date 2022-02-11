import './modal.css';

import React from 'react';
import FormModal from '../FormModal';

class Modal extends React.Component {

    render() {
        return (
            <div class="modal" id="modal">
                <div class="modal_content">
                    <FormModal />
                    <button class="modal__close" type="button"></button>
                </div>
            </div>
        )
    }
}

export default Modal;