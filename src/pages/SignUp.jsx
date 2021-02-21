import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions/UserAction'


class SignUp extends PureComponent {
    state = {
        name: '',
        password: ''
    }
    onSignUp = async (ev) => {
        ev.preventDefault();
        const newUser = this.state;
        await this.props.signUp(newUser);
        this.setState({ name: '', password: '' })
        this.props.history.push(`/`);

    }
    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-up-page">
                <h2>Sign up:</h2>
                <form onSubmit={this.onSignUp}>
                    <label>Name: </label>
                    <input
                        type="text"
                        placeholder="Eter your name"
                        name="name"
                        value={this.state.name}
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
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
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

