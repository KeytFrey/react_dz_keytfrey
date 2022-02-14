import './inout.css';

import React from 'react';
import Modal from '../Modal';

class InOut extends React.Component {

    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.state = {
            isLogin: false
        }
    }

    login(event) {
        console.log('login')
        this.setState({
            isLogin: true
        })
    }

    logout(event) {
        console.log('logout')
        this.setState({
            isLogin: false
        })
    }

    render() {
        let isLogin = this.state.isLogin

        return (
            <div>
                <div>
                    {isLogin ? (
                        <button className='logout' onClick={(e) => this.logout(e)}>Выйти</button>
                    ) : (
                        <button className='login' onClick={(e) => this.login(e)}>Войти</button>
                    )}
                </div>
                <Modal show={isLogin} />
            </div>
        )
    }
}

export default InOut;