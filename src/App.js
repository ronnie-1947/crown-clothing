import React from 'react';
import {Switch , Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn_SignUp from './pages/signUp_signIn/signUp_signIn.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route exact path='/shop' component = {ShopPage}/>
        <Route exact path='/signIn' component = {SignIn_SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
