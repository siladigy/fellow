import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App(props) {
  return (
    <BrowserRouter>
    <div className='main-wrapper'>
      <HeaderContainer />
      <Navigation />
      <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
      <Route path="/dialogs" render={ () => <Dialogs /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
    </div>
    </BrowserRouter>
  );
}

export default App;
