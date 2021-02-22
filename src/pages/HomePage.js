import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser, logOut } from '../actions/UserAction';
import { getRate } from '../actions/BitcoinAction';

import bitcoinGif from '../assets/imgs/bitcoin-gif.gif'
import MovesList from '../cmps/MovesList'

const HomePage = (props) => {
    const { loggedInUser, rate } = props;
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
    }, [loggedInUser, rate])

    const login = async (ev) => {
        ev.preventDefault();
        const userCredentials = {
            name: userName,
            password: password
        }
        dispatch(loadUser(userCredentials));
        dispatch(getRate())
    }

    const onLogOut = async (ev) => {
        ev.preventDefault();
        setUserName('');
        setPassword('');
        dispatch(logOut());
        props.history.push('/');
    }

    return (
        <div className="home-page">
            {(loggedInUser && rate) ? (
                <div>
                    <section>
                        <h1>Welcome {loggedInUser.name}!</h1>
                        <img className="home-user-img" src={`https://robohash.org/${loggedInUser.name}.png`} alt="" />
                        <h3>you have: {loggedInUser.coins} coins.</h3>
                        <h3>your moves are: {(loggedInUser.moves) ? loggedInUser.moves.length : 0}.</h3>
                        <h3>the current rate is: {rate.data}</h3>
                    </section>
                    <button onClick={(ev) => onLogOut(ev)} className="log-out-btn">Log out</button>
                    {loggedInUser.moves && <MovesList moves={loggedInUser.moves} />}
                </div>
            ) :
                (<section className="sign-in-sec">
                    <h2>Log in:</h2>
                    <form onSubmit={(ev) => login(ev)}>
                        <label>Name: </label>
                        <input
                            type="text"
                            placeholder="Eter your name"
                            name="userName"
                            value={userName}
                            onChange={(ev) => setUserName(ev.target.value)}
                        />
                        <label>Password: </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <button type="submit">Go</button>
                    </form>
                    <h2>New arround?
                        <span className="sign-up">
                            <Link to={'/SignUp'}>  Sign up now</Link>
                        </span>
                    </h2>
                    <img className="bitcoin-gif" src={bitcoinGif} alt="bitcoin gif" />
                </section>)
            }

        </div>

    )

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

