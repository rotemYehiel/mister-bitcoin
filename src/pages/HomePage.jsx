import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser, logOut } from '../actions/UserAction';
import { getRate } from '../actions/BitcoinAction';

import bitcoinGif from '../assets/imgs/bitcoin-gif.gif'
import MovesList from '../cmps/MovesList'

class HomePage extends PureComponent {
    state = {
        userName: '',
        password: ''
    };
    componentWillMount() {
        // this is happened befor the first rendering
        console.log('rotem change it here!!!')
        this.props.loadUser();
        this.props.getRate();
    }
    // async componentDidMount() {
    //     // console.log('componentDidMount')
    //     // this.props.loadUser();
    //     // this.props.getRate();
    // }
    // componentWillUpdate(newProps, newState) {
    //     console.log('newProps:', newProps)
    //     console.log('newState:', newState)

    // }
    // componentDidUpdate(preProps, preState) {
    //     console.log('preProps:', preProps)
    //     console.log('preState:', preState)
    // }
    login = async (ev) => {
        ev.preventDefault();
        const userCredentials = {
            name: this.state.userName,
            password: this.state.password
        }
        this.props.loadUser(userCredentials);
    }
    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value })
    }
    onLogOut = async () => {
        this.setState({ rate: null, userName: '', password: '' });
        this.props.logOut();
    }
    render() {

        const { loggedInUser, rate } = this.props;
        if (!rate) {
            return <div>no rate yet... </div>;
        }

        if (!loggedInUser) {
            return (
                <section className="sign-in-sec">

                    <h2>Log in:</h2>
                    <form onSubmit={this.login}>
                        <label>Name: </label>
                        <input
                            type="text"
                            placeholder="Eter your name"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                        <label>Password: </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <button>Go</button>
                    </form>
                    <h2>New arround?
                        <span className="sign-up">
                            <Link to={'/SignUp'}>  Sign up now</Link>
                        </span>
                    </h2>
                    <img className="bitcoin-gif" src={bitcoinGif} alt="bitcoin gif" />
                </section>
            )
        } else {
            return (
                <div className="home-page">
                    <section><h1>Welcome {loggedInUser.name}!</h1>
                        <img className="home-user-img" src={`https://robohash.org/${loggedInUser.name}.png`} alt="" />
                        <h3>you have: {loggedInUser.coins} coins.</h3>
                        <h3>your moves are: {(loggedInUser.moves) ? loggedInUser.moves.length : 0}.</h3>
                        <h3>the current rate is: {rate.data}</h3></section>
                    <button onClick={this.onLogOut} className="log-out-btn">Log out</button>
                    {loggedInUser.moves && <MovesList moves={loggedInUser.moves} />}
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    // console.count('calls to state in HomePage')
    return {
        loggedInUser: state.user.loggedInUser,
        rate: state.bitcoin.rate
    }
}
const mapDispatchToProps = {
    loadUser,
    logOut,
    getRate
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

