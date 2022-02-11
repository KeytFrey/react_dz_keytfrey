import './formmodal.css';

import React from 'react';

class FormModal extends React.Component {

    render() {
        return (
            <form class="form" action="/" method="POST">
                <input class="form__content" type="email" name="email" placeholder="Ваш e-mail"></input>
                <input class="form__content" type="password" name="password" placeholder="Ваш пароль"></input>

                <div class = 'form_btn'>
                    <input class="btn" type="button" value="Войти"></input> /&nbsp;
                    <input class="btn" type="button" value="Зарегистрироваться"></input>
                </div>
            </form>
        )
    }
}

export default FormModal;