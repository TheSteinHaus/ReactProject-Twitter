import React from 'react';
import './log_reg.css'
import { ReactComponent as Twitter } from '../left-menu/twitter.svg'

function Log (props) {
    return (
        <div className="block">
            <Twitter />
            <div className="content_block">
                <p className="header">Войти</p>
                <input className="input_user_info" placeholder="Имя" />
                <input className="input_user_info" placeholder="Пароль" />
                <button className="button_next">Войти</button>
            </div>
        </div>
    );
}

export default Log;