import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Layout from './components/layout/layout';
import Log from './components/userLogReg/log';
import Reg from './components/userLogReg/reg';
import Users from './components/profile/users';
import MainPage from './components/home_page';
import NotificationPage from './components/notifications/notifications_page';
import ExplorePage from './components/explore/explorePage';

function App(props) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          <Layout>
            <MainPage />
          </Layout>
        </Route>
        
        <Route path="/profile">
          <Layout>
            <Users />
          </Layout>
        </Route>

        <Route path="/notifications">
          <Layout>
            <NotificationPage />
          </Layout>
        </Route>

        <Route path="/explore">
          <Layout>
            <ExplorePage />
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

        <Route path="/404-not-found">
          <h1>Not found!</h1>
        </Route>

        <Redirect to='/404-not-found' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
