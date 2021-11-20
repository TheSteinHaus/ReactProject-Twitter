import React from 'react';
import LeftMenu from '../left-menu/left_menu';
import Header from '../main_header/main_header';
import RightMenu from '../right_menu/right_menu';

function NotificationPage(props) {
    return (
        <div className="sides">
            <LeftMenu />
                <div className="main">
                    <Header main_text="Уведомления" />
                </div>
            <RightMenu />
            </div>
    );
}

export default NotificationPage;