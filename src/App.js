import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';
import SignInAndSignUp from './pages/sign-in-sign-up';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import "bulma";


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
         
      }else { 
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
      return (
        <div class="container">
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </div>
      );
  }
}

export default App;
