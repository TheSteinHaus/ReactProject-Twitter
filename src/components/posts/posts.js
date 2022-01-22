import React, { Component } from 'react';
import logo from './icon.png';
import './posts.css'
import { ReactComponent as MessageLogo } from './message.svg'
import { ReactComponent as LikeLogo } from './like.svg'
import { ReactComponent as ShareLogo } from './share.svg'
import { ReactComponent as AnalyseLogo } from './analyse.svg'
import { ReactComponent as RetweetLogo } from './retweet.svg'
  
class User extends Component {

    render () { return (
        <div className={ this.props.post_class_name }>
        <img src={logo} className="post_logo" alt="a"></img>
          <div className="post_text">
        <p>
          <a href="#">{this.props.author.name}<span className="author_gray">{this.props.author.nickname}</span></a>
          <span className="author_gray">·</span>
          <a href="#"><span className="author_gray">{this.props.date}</span></a>
          <p>{this.props.text}</p>
          <img className={this.props.img_true === true ? "img_post" : "img_none"} src={this.props.media}></img>
        </p>
        <div className="post_cymbols">
              <MessageLogo className="images img1" />
              <ShareLogo className="images img2" />
              <LikeLogo className={ this.props.class_name } onClick={ this.props.on_click } />
              <RetweetLogo className="images img4" />
              <AnalyseLogo className="images img5" />
            </div>
        </div>
        </div>
      );
    }
  }

export default User;
  