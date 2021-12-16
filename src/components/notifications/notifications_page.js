import React from 'react';
import LeftMenu from '../left-menu/left_menu';
import Header from '../main_header/main_header';
import RightMenu from '../right_menu/right_menu';
import Notifications from './notifications';
import notifications from '../notifications/notifications.json'
import { ReactComponent as Star } from './star.svg'
import { ReactComponent as Mess } from './mess.svg'

function NotificationPage(props) {
    return (
        <div className="sides">
            <LeftMenu />
                <div className="main">
                    <Header main_text="Уведомления" />
                    { notifications.map((notes) => <Notifications leftIcon={notes.icon == "star" ? <Star /> : <Mess />} type={notes.type} text={notes.text} />) }
                </div>
            <RightMenu />
            </div>
    );
}

export default NotificationPage;