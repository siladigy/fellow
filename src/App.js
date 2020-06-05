import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
    <BrowserRouter>
    <div className='main-wrapper'>
      <Header />
      <Navigation />
      <Route path="/profile" render={ () => <Profile name="George Siladi" country="Uzhhorod, Ukraine" />} />
      <Route path="/dialogs" render={ () => <Dialogs /> } />
      <Route path="/users" render={ () => <UsersContainer /> } />
    </div>
    </BrowserRouter>
  );
}

export default App;
