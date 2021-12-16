import React, { Component } from 'react';
import LeftMenu from './left-menu/left_menu';
import Header from './main_header/main_header';
import Tweet from './makeTweet/make';
import RightMenu from './right_menu/right_menu';
import PostsComponent from './posts/postsComponent';

class MainPage extends Component {

    render () { return (
        <div className="sides">
            <LeftMenu />
                <div className="main">
                    <Header main_text="Главная" />
                    <Tweet />
                    <PostsComponent />
                </div>
            <RightMenu />
              
        </div>
    ); }
}

export default MainPage;