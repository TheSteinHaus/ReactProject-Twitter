import React from 'react';
import './notifications.css'
import defau from '../hat/default_user.png'

function Notifications(props) {
    return (
        <div className="notifications">
            <div className="logos">
                <svg className="user_logo">{props.leftIcon}</svg>
                <img src={defau} className="user_logo" />
            </div>
            <div className="texts">
                <p className="text header">{props.type}</p>
                <p className="text">{props.text}</p>
            </div>
        </div>
    );
}

export default Notifications;