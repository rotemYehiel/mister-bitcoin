import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { loadUser } from './actions/UserAction';
import { getRate } from './actions/BitcoinAction';

import './App.css';

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ContactDetails from './pages/ContactDetails'
import StatisticPage from './pages/StatisticPage'
import ContactEditPage from './pages/ContactEditPage'
import SignUpPage from './pages/SignUp'
import MainHeader from './cmps/MainHeader';

library.add(fab)

const history = createBrowserHistory();

const App = (props) => {
  const { loggedInUser, rate } = props;
  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = () => {
      dispatch(loadUser())
    }
    const loadRate = () => {
      dispatch(getRate())
    }
    loadRate();
    if (!loggedInUser) getUser();
    console.log("loggedInUser in app:", loggedInUser)
  }, [loggedInUser, rate])

  return (
    <div className="App">
      <Router history={history}>
        <MainHeader />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} loggedInUser={loggedInUser} />
            <Route path="/Contact" exact component={ContactPage} loggedInUser={loggedInUser} />
            <Route path="/Contact/Edit/:id?" component={ContactEditPage} loggedInUser={loggedInUser} />
            <Route path="/Contact/:id" component={ContactDetails} loggedInUser={loggedInUser} />
            <Route path="/Statistic" component={StatisticPage} loggedInUser={loggedInUser} />
            <Route path="/SignUp" component={SignUpPage} loggedInUser={loggedInUser} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.count('calls to state in App')
  return {
    loggedInUser: state.user.loggedInUser,
  }
}
const mapDispatchToProps = {
  loadUser
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

