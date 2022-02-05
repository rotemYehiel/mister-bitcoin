import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { connect } from 'react-redux'
import { signUp } from '../actions/UserAction'


const SignUp = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onSignUp = async (ev) => {
        ev.preventDefault();
        const newUser = { name: name, password: password };
        await dispatch(signUp(newUser));
        resetForm();
        props.history.push('/');
    }
    const resetForm = () => {
        setName('');
        setPassword('');
    }

    return (
        <div className="sign-up-page page">
            <h2 className="page-header">Sign up:</h2>
            <form onSubmit={(ev) => onSignUp(ev)}>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Eter your name"
                    name="name"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                />
                <label>Password: </label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        loggedInUser: state.user.loggedInUser
    }
}
const mapDispatchToProps = {
    signUp
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

