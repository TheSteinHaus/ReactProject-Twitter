import React from 'react';
import logo from './icon.png';
import './posts.css'
import { ReactComponent as MessageLogo } from './message.svg'
import { ReactComponent as LikeLogo } from './like.svg'
import { ReactComponent as ShareLogo } from './share.svg'
import { ReactComponent as AnalyseLogo } from './analyse.svg'
import { ReactComponent as RetweetLogo } from './retweet.svg'
  
function User(props) {
    return (
      <div className="post">
      <img src={logo} className="post_logo" alt="a"></img>
        <div className="post_text">
      <p>
        <a href="#">{props.author.name}<f className="author_gray">{props.author.nickname}</f></a>
        <f className="author_gray">·</f>
        <a href="#"><f className="author_gray">{props.date}</f></a>
        {/* <img className="dots" src={dots_logo} /> */}
        <p>{props.text}</p>
      </p>
      <div className="post_cymbols">
            <div><MessageLogo className="images img1" /></div>
            <div><ShareLogo className="images img2" /></div>
            <div><LikeLogo className="images img3" /></div>
            <div><RetweetLogo className="images img4" /></div>
            <div><AnalyseLogo className="images img5" /></div>
          </div>
      </div>
      </div>
    );
  }

export default User;
  