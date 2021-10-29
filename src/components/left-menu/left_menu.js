import React from 'react'
import { Link } from 'react-router-dom'
import './left_menu.css'
import user_logo from '../posts/icon.png'
import { ReactComponent as Twitter } from './twitter.svg'
import { ReactComponent as Birdhouse } from './birdhouse.svg'
import { ReactComponent as Hashtag } from './hashtag.svg'
import { ReactComponent as Bell } from './bell.svg'
import { ReactComponent as Mail } from './mail.svg'
import { ReactComponent as Bookmark } from './bookmark.svg'
import { ReactComponent as List } from './list.svg'
import { ReactComponent as User } from './user.svg'
import { ReactComponent as MoreCircled } from './morecircle.svg'
import { ReactComponent as Dots } from '../dots.svg'

function LeftMenu(props) {
    return (
        <div className="left_menu">
            <elements>
            <div><button className="twitter"><Twitter className="images_menu" /></button></div>
            <Link to={'/'}> <button><Birdhouse className="images_menu" /><p>Главная</p></button> </Link>
            <button><Hashtag className="images_menu" /><p>Обзор</p></button>
            <button><Bell className="images_menu" /><p>Уведомления</p></button>
            <button><Mail className="images_menu" /><p>Сообщения</p></button>
            <button><Bookmark className="images_menu" /><p>Закладки</p></button>
            <button><List className="images_menu" /><p>Списки</p></button>
            <Link to={'/profile'}> <button><User className="images_menu" /><p>Профиль</p></button> </Link>
            <button><MoreCircled className="images_menu" /><p>Еще</p></button>
            <button>Твитнуть</button>
            </elements>
            <element>
            <div>
            <button className="user_button">
            
                <img src={user_logo} className="logo" />
                <p>
                    <p>John Smith</p>
                    <p>@The_Man</p>
                </p>
                <Dots className="dots" />
            </button>
            </div>
            </element>
        </div>
    );
}

export default LeftMenu;