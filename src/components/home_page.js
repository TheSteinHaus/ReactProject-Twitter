import React from 'react';
import LeftMenu from './left-menu/left_menu';
import Header from './main_header/main_header';
import Tweet from './makeTweet/make';
import User from './posts/posts';
import RightMenu from './right_menu/right_menu';
import posts from './posts/posts.json';

function MainPage(props) {
    return (
        <div className="sides">
            <LeftMenu />
                <div className="main">
                    <Header main_text="Главная" />
                    <Tweet />
                    { posts.map((post) => <User date={post.date} text={post.text} author={post.author} />) }
                </div>
            <RightMenu />
              
        </div>
    );
}

export default MainPage;