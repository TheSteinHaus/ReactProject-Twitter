import React from 'react'
import logo from '../posts/icon.png'
import { ReactComponent as PhotoIcon } from './photo_icon.svg'
import { ReactComponent as Gif } from './gif.svg'
import { ReactComponent as Survey } from './survey.svg'
import { ReactComponent as Smile } from './smile.svg'
import { ReactComponent as Plan } from './plan.svg'
import './make.css'

function makeTweet(props) {
    return (
        <div className="make_tweet">
            <img src={logo} className="post_logo" alt="a"></img>
            <div className="make_tweet_main">
                <textarea placeholder="Что происходит?"></textarea>
                <div className="tweet_bottom">
                    <div>
                        <PhotoIcon />
                        <Gif />
                        <Survey />
                        <Smile />
                        <Plan />
                    </div>
                    <button>Твитнуть</button>
                </div>
            </div>
        </div>
    )
}

export default makeTweet;