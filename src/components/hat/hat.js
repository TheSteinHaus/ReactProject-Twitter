import React from 'react'
import './hat.css'
import background from './background.jpg'
import logo from '../posts/icon.png'
import { ReactComponent as Balloon } from './ballon.svg'
import { ReactComponent as Calendar } from './calendar.svg'

function Hat(props) {
    return (
        <div className="hat">
            <img src={background} className="hat_background" />
            <div className="upper">
                <img src={logo} />
                <button type="submit">Настроить профиль</button>
                
            </div>
            <p className="name_user">TJ</p>
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
                <a href="#">21 <font>в читаемых</font></a>
                <a href="#">2 <font>читателя</font></a>
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