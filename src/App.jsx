import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import SignInScreen from './components/SignInScreen';
import Location from './components/Location';
import LocationDetails from './components/LocationDetails';
import AddDonation from './components/AddDonation'; 
import Donation from './components/Donation';
import DonationDetails from './components/DonationDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div className="App">
        <Header /> 
        <div className="Welcome">
          <strong> Welcome to Censtible </strong>
        </div>
        <div>
        <Switch>
          <Route exact path='/' component={SignInScreen} />
          <Route path='/location/:id' component={LocationDetails} />
          <Route path='/locations' component={Location} />
          <Route path='/donations' component={Donation} />
          <Route path='/donation/:id' component={DonationDetails} />
          <Route path='/addDonation' component={AddDonation} />
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
