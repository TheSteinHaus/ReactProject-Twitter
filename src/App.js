import React, { Children } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import User from './components/posts/posts'
import Tweet from './components/makeTweet/make'
import Hat from './components/hat/hat'
import post from './components/posts/posts.json'
import RightMenu from './components/right_menu/right_menu';
import Layout from './components/layout/layout';
import LeftMenu from './components/left-menu/left_menu';
import Header from './components/main_header/main_header';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div className="sides">
            <Layout>
              <LeftMenu />
            </Layout>
            <div className="main">
              <Layout>
                <Header main_text="Главная" />
              </Layout>
              <Tweet />
                { [...Array(post.length)].map((item, index) => <User key={index} date={post[index].date} text={post[index].text} author={post[index].author} /> ) }
            </div>
            <RightMenu />
            
          </div>
        </Route>
        
        <Route path="/profile">
          <div className="sides">
            <Layout>
              <LeftMenu />
            </Layout>
            <div className="main">
              <Layout>
                <Header main_text="Профиль" />
              </Layout>
              <Hat />
            </div>
            <RightMenu />
            
          </div>
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
