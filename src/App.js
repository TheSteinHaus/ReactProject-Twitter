import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import User from './components/posts/posts'
import Tweet from './components/makeTweet/make'
import Hat from './components/hat/hat'
import posts from './components/posts/posts.json'
import RightMenu from './components/right_menu/right_menu';
import Layout from './components/layout/layout';
import LeftMenu from './components/left-menu/left_menu';
import Header from './components/main_header/main_header';
import Log from './components/userLogReg/log';
import Reg from './components/userLogReg/reg';
import Users from './components/hat/users';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          <Layout>
            <div className="sides">
                <LeftMenu />
              <div className="main">
                  <Header main_text="Главная" />
                <Tweet />
                  { posts.map((post) => <User date={post.date} text={post.text} author={post.author} />) }
              </div>
              <RightMenu />
              
            </div>
          </Layout>
        </Route>
        
        <Route path="/profile">
          <Layout>
            <div className="sides">
                <LeftMenu />
              <div className="main">
                <Header main_text="Профиль" />
                <Hat />
              </div>
              <RightMenu />
              
            </div>
          </Layout>
        </Route>

        <Route path="/notifications">
        <Layout>
            <div className="sides">
                <LeftMenu />
              <div className="main">
                <Header main_text="Уведомления" />
                <Hat />
              </div>
              <RightMenu />
              
            </div>
          </Layout>
        </Route>

        <Route path="/login">
          <Log />
        </Route>

        <Route path="/register">
          <Reg />
        </Route>

        <Route path="/user/:login">
          <Layout>
            <Users />
          </Layout>
        </Route>

        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
