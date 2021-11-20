import React from 'react'
import './hat.css'
import background from './background.jpg'
import logo from '../posts/icon.png'
import default_logo from './default_user.png'
import { ReactComponent as Balloon } from './ballon.svg'
import { ReactComponent as Calendar } from './calendar.svg'
import { useParams } from 'react-router-dom'

function Hat(props) {
    const { login } = useParams();

    return (
        <div className="hat">
            <img src={background} className="hat_background" />
            <div className="upper">
                <img src={login == undefined ? logo : default_logo} />
                <button type="submit">Настроить профиль</button>
                
            </div>
            <p className="name_user">{login == undefined ? "TJ" : login}</p>
            <p>@The_Man</p>
            <div className="regDay">
                <div>
                    <Balloon />
                    <p>Дата рождения: 27 августа 2000 г.</p>
                </div>
                <div>
                    <Calendar />
                    <p>Регистрация: октябрь 2009 г.</p>
                </div>
            </div>
            <div className="subscribers">
                <a href="#">21 <span className="readers">в читаемых</span></a>
                <a href="#">2 <span className="readers">читателя</span></a>
            </div>
            <div className="down_buttons">
                <button>Твиты</button>
                <button>Твиты и ответы</button>
                <button>Медиа</button>
                <button>Нравится</button>
            </div>
        </div>
    );
}

export default Hat;