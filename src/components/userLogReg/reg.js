import React from 'react';
import './log_reg.css'
import { ReactComponent as Twitter } from '../left-menu/twitter.svg'

function Reg (props) {
    return (
        <div className="block">
            <Twitter />
            <div className="content_block">
                <p className="header">Создайте свою учётную запись</p>
                <input className="input_user_info" placeholder="Имя" />
                <input className="input_user_info" placeholder="Электронная почта" />
                <input className="input_user_info" placeholder="Пароль" />
                <input className="input_user_info" placeholder="Повторите пароль" />
                <button className="button_next">Регистрация</button>
            </div>
        </div>
    );
}

export default Reg;