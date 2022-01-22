import React, {useState} from 'react';
import axios from 'axios';
import './log_reg.css'
import { ReactComponent as Twitter } from '../left-menu/twitter.svg'
import { Link } from 'react-router-dom'

const api = axios.create ({
    baseURL: 'http://localhost:5000'
})

function Log (props) {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))
    const [user, setUser] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return !isLogged ? (
        <div className="block">
            <Twitter />
            <div className="content_block">
                <p className="header">Войти</p>
                <input className="input_user_info" onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Почта" />
                <input className="input_user_info" onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Пароль" />
                <button className="button_next" onClick={async () => {
                    await api.post('/api/auth/login', {email: email, password: password})
                    .then ( () => {
                        localStorage.setItem('isLogged', true)
                        // localStorage.setItem('user', email)
                    })
                    .then(async () => {
                    let data = await (await api.get(`/user/${email}`)).data
                    localStorage.setItem('user', JSON.stringify(data))
                    window.location = "/home"
                    })
                    }
                    }>
                Войти</button>
                <Link to={'/home'}><button className='button_next'>Войти как гость</button></Link>
                <Link to={'/register'}><button className='button_next'>Регистрация</button></Link>
            </div>
        </div>
    ) :
    (
        <>
        {window.location = "/home"}
        </>
    )
}

export default Log;