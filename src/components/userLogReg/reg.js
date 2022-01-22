import React, { Component, useState } from 'react';
import axios from 'axios';
import './log_reg.css'
import { ReactComponent as Twitter } from '../left-menu/twitter.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const api = axios.create ({
    baseURL: 'http://localhost:5000/api/auth/registration'
})

function Reg(props) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="block">
            <Twitter />
            <div className="content_block">
                <p className="header">Создайте свою учётную запись</p>
                <input className="input_user_info" onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Электронная почта" />
                <input className="input_user_info" onChange={e => setName(e.target.value)} value={name} placeholder="Имя" />
                <input className="input_user_info" onChange={e => setNickname(e.target.value)} value={nickname} placeholder="Логин" />
                <input className="input_user_info" onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Пароль" />
                <button className="button_next" onClick={async () => 
                    await api.post('/', {email: email, name: name, nickname: nickname, password: password})
                    .then (() => {
                        window.location = "/login"
                    })
                    }>
                Регистрация</button>
                <Link to={'/login'}><button className='button_next'>Войти</button></Link>
            </div>
        </div>
    );
}

export default Reg;