import './formmodal.css';

import React from 'react';

class FormModal extends React.Component {

    render() {
        return (
            <form className="form" action="/" method="POST">
                <input className="form__content" type="email" name="email" placeholder="Ваш e-mail"></input>
                <input className="form__content" type="password" name="password" placeholder="Ваш пароль"></input>
                <div className='form__btn'>
                    <button>Войти</button> /&nbsp;
                    <button>Зарегистрироваться</button>
                </div>
            </form>
        )
    }
}

export default FormModal;