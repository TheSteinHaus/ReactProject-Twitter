import React, {useState} from 'react'
import axios from 'axios'
import logo from '../posts/icon.png'
import { ReactComponent as PhotoIcon } from './photo_icon.svg'
import { ReactComponent as Gif } from './gif.svg'
import { ReactComponent as Survey } from './survey.svg'
import { ReactComponent as Smile } from './smile.svg'
import { ReactComponent as Plan } from './plan.svg'
import './make.css'

const api = axios.create({
    baseURL: `http://localhost:5000`
})

const MakeTweet = props => {
    const [text, setText] = useState('')

    return (
        <div className="make_tweet">
            <img src={logo} className="post_logo" alt="a"></img>
            <div className="make_tweet_main">
                <textarea placeholder="Что происходит?" onChange={e => setText(e.target.value)} value={text}></textarea>
                <div className="tweet_bottom">
                    <div>
                        <PhotoIcon />
                        <Gif />
                        <Survey />
                        <Smile />
                        <Plan />
                    </div>
                    <button onClick={async () => {
                    let user = JSON.parse(localStorage.getItem('user'))
                        await api.put('/post/create', {text: text, name: user.name, nickname: user.nickname, date: '15 янв.'})
                        .then(
                            window.location.reload()
                        )
                    }}>Твитнуть</button>
                </div>
            </div>
        </div>
    )
}

export default MakeTweet