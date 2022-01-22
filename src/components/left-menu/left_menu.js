import React, {useState} from 'react'
import axios from 'axios'
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

const api = axios.create({
    baseURL: `http://localhost:5000`
  })

function Modal({active, setActive}) {
    const [text, setText] = useState('')

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
                <span className='headerTweetCreation'>Новый пост</span>
                <textarea className='textField' placeholder="Что происходит?" onChange={e => setText(e.target.value)} value={text} ></textarea>
                <button className='sentTweet' onClick={async () => {
                    let user = JSON.parse(localStorage.getItem('user'))
                    await api.put('/post/create', {text: text, name: user.name, nickname: user.nickname, date: '15 янв.'})
                    .then(
                        window.location.reload()
                    )
                }}>Твитнуть</button>
            </div>
        </div>
    )
}

class LeftMenu extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            activeButton: 0,
            isLogged: localStorage.getItem('isLogged'),
            modalActive: false
        };
    }

    updateData = (value) => {
        this.setState({modalActive: value})
    }

    // getUser = async () => {
    //     let data = 
    //     alert(data)
    //     this.setState({ user: data })
    // }
    
    render() {
        const url = window.location.pathname
        const user = JSON.parse(localStorage.getItem('user'))

        return user != null ? (
            <>
            <div className="left_menu">
                <elements>
                <div><button className="twitter"><Twitter className="images_menu" /></button></div>
                <Link to={'/home'}> <button className={ url === "/home" ? "active_images" : ""}><Birdhouse className="images_menu"/><p>Главная</p></button> </Link>
                <Link to={'/explore'}> <button className={ url === "/explore" ? "active_images" : ""}><Hashtag className="images_menu" /><p>Обзор</p></button> </Link>
                <Link to={'/notifications'}> <button className={ url === "/notifications" ? "active_images" : ""}><Bell className="images_menu" /><p>Уведомления</p></button> </Link>
                <button><Mail className="images_menu" /><p>Сообщения</p></button>
                <button><Bookmark className="images_menu" /><p>Закладки</p></button>
                <button><List className="images_menu" /><p>Списки</p></button>
                <Link to={'/profile'}> <button className={ url === "/profile" ? "active_images" : ""}><User className="images_menu" /><p>Профиль</p></button> </Link>
                <button><MoreCircled className="images_menu" /><p>Еще</p></button>
                <button onClick={() => this.setState({modalActive: true})}>Твитнуть</button>
                </elements>
                <element>
                <div>
                
                <button className="user_button">
                <span className='exitField' onClick={() => 
                    {
                        localStorage.setItem('isLogged', false)
                        localStorage.setItem('user', null)
                        window.location = '/login'
                    }
                }>Выйти</span>
                    <img src={user_logo} className="logo" />
                    <p>
                        <p>{user.name}</p>
                        <p>{user.nickname}</p>
                    </p>
                    <Dots className="dots" />
                </button>
                </div>
                </element>
                
            </div>
            <Modal active={this.state.modalActive} setActive={this.updateData} />
            </>
        ) : 
        (
            <div className="left_menu">
                <elements>
                <div><button className="twitter"><Twitter className="images_menu" /></button></div>
                <Link to={'/home'}> <button className={ url === "/home" ? "active_images" : ""}><Birdhouse className="images_menu"/><p>Главная</p></button> </Link>
                <Link to={'/explore'}> <button className={ url === "/explore" ? "active_images" : ""}><Hashtag className="images_menu" /><p>Обзор</p></button> </Link>
                <button className={ url === "/notifications" ? "active_images" : ""}><Bell className="images_menu" /><p>Уведомления</p></button>
                <button><Mail className="images_menu" /><p>Сообщения</p></button>
                <button><Bookmark className="images_menu" /><p>Закладки</p></button>
                <button><List className="images_menu" /><p>Списки</p></button>
                <button className={ url === "/profile" ? "active_images" : ""}><User className="images_menu" /><p>Профиль</p></button>
                <button><MoreCircled className="images_menu" /><p>Еще</p></button>
                </elements>
                <element>
                <div>
                
                <button className="user_button">
                    <img src={user_logo} className="logo" />
                    <p>
                        <p>Гость</p>
                        <p>Гость</p>
                    </p>
                    <Link to={'/login'}><span className='LogIn'>Войти</span></Link>
                </button>
                </div>
                </element>
            </div>
        )
    }
}

export default LeftMenu;