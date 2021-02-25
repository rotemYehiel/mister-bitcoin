import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faExchangeAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

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
        resetForm();
        dispatch(getRate());
    }

    const onLogOut = async (ev) => {
        ev.preventDefault();
        dispatch(logOut());
        // dispatch(loadUser());
    }
    const resetForm = () => {
        setUserName('');
        setPassword('');
    }

    return (
        <div className="home-page page">
            {(loggedInUser && rate) ? (
                <div className="user-logged-in">
                    <section className="user-section">
                        <div className="user-img-main-wrapper card-on-feed">
                            <img className="home-user-img" src={`https://robohash.org/${loggedInUser.name}.png`} alt="" />
                            <h1>{loggedInUser.name}</h1>
                            <button onClick={(ev) => onLogOut(ev)} className="log-out-btn">Log out</button>
                        </div>
                        <section className="info-section card-on-feed">
                            <p><span><FontAwesomeIcon icon={faCoins} /></span>{loggedInUser.coins} coins</p>
                            <p><span><FontAwesomeIcon icon={faExchangeAlt} /></span>number of moves: {(loggedInUser.moves) ? loggedInUser.moves.length : 0}</p>
                            <p><span><FontAwesomeIcon icon={faChartLine} /></span>rate is: {rate.data}</p>
                        </section>
                    </section>
                    {loggedInUser.moves && <div className="move-list-section" ><MovesList moves={loggedInUser.moves} /></div>}
                </div>
            ) :
                (<section className="sign-in-sec">
                    <h2 className="page-header">Log in:</h2>
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
                        <button className="buttons" type="submit">Go</button>
                    </form>
                    <h2 className="page-header text">New arround?
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

