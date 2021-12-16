import React from 'react'
import './hat.css'
import background from './background.jpg'
import logo from '../posts/icon.png'
import default_logo from './default_user.png'
import { ReactComponent as Balloon } from './ballon.svg'
import { ReactComponent as Calendar } from './calendar.svg'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import PostsComponent from '../posts/postsComponent'

function Hat(props) {
    const { login } = useParams();

    const [state, setState] = useState(0);

    return (

        <>

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
                <button className={state === 0 ? "stick" : ""} onClick={() => setState(0)}>Твиты</button>
                <button className={state === 1 ? "stick" : ""} onClick={() => setState(1)}>Твиты и ответы</button>
                <button className={state === 2 ? "stick" : ""} onClick={() => setState(2)}>Медиа</button>
                <button className={state === 3 ? "stick" : ""} onClick={() => setState(3)}>Нравится</button>
            </div>
        </div>

        <PostsComponent post_state={ state } />

        </>

    );
}

export default Hat;