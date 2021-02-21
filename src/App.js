import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadUser } from './actions/UserAction';

import './App.css';

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ContactDetails from './pages/ContactDetails'

import StatisticPage from './pages/StatisticPage'
import ContactEditPage from './pages/ContactEditPage'
import SignUpPage from './pages/SignUp'
import About from './pages/About'

import MainHeader from './cmps/MainHeader'



const history = createBrowserHistory();

function App(props) {
  props.loadUser()
  return (
    <div className="App">
      <Router history={history}>
        <MainHeader />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Contact" exact component={ContactPage} />
            <Route path="/Contact/Edit/:id?" component={ContactEditPage} />
            <Route path="/Contact/:id" component={ContactDetails} />
            <Route path="/Statistic" component={StatisticPage} />
            <Route path="/SignUp" component={SignUpPage} />
            <Route path="/About" component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.count('calls to state in App')
  // console.log('loggedInUser in state in App:', state.user.loggedInUser)
  return {
    loggedInUser: state.user.loggedInUser,
  }
}
const mapDispatchToProps = {
  loadUser
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

