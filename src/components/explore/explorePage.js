import React from 'react';
import LeftMenu from '../left-menu/left_menu';
import Header from '../main_header/main_header';
import RightMenu from '../right_menu/right_menu';
import Explore from './explore';

function ExplorePage(props) {
    return (
        <div className="sides">
            <LeftMenu />
                <div className="main">
                    <Explore />
                </div>
            <RightMenu />
        </div>
    );
}

export default ExplorePage;