import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserActions from './redux/user/user.actions';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import IndoorPage from './pages/indoorpage/indoorpage.component';
import OutdoorPage from './pages/outdoorpage/outdoorpage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/indoor-readings' render={() => <IndoorPage {...this.props} />} />
        <Route exact path='/outdoor-readings' render={() => <OutdoorPage {...this.props} />} />
        <Route exact path='/signin' render={() => (isAuthenticated ? <Redirect to='/' /> : <SignInPage />)} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.token !== null,
    token: state.user.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(UserActions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
