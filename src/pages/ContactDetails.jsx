import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//rce
import { loadCotnact, deleteContact, clearContact } from '../actions/ContactAction'
import { addMove } from '../actions/UserAction'

import TransferFund from '../cmps/TransferFund'
import MovesList from '../cmps/MovesList'


class ContactDetails extends PureComponent {
    componentWillMount() {
        this.loadContact();
    }
    // componentDidMount() {
    //     this.loadContact();
    // }
    // componentDidUpdate(prevProps) {
    //     console.log('prevProps.loggedInUser:', prevProps.loggedInUser)
    //     console.log('this.props.loggedInUser:', this.props.loggedInUser)
    // }

    loadContact = async () => {
        // console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
        this.props.loadCotnact(id)
    }
    onTransferCoins = async (amount) => {
        this.props.addMove(this.props.contact, amount);
    }
    deleteClickHandler = async () => {
        this.props.history.go(-1);
        this.props.deleteContact(this.props.contact._id)
    }

    onGoBackClickHandler = (ev) => {
        this.props.history.go(-1);
    }
    render() {
        const { contact, loggedInUser } = this.props
        // console.log('this.props:', this.props)
        if (!contact) {
            return <div>Loading... </div>;
        } else {
            return (
                <div className="contact-details">
                    <section className="btns-sec">
                        <button title="Return" className="button-icons" onClick={this.onGoBackClickHandler}><i className="fas fa-undo"></i></button>
                        <button title="Details" className="button-icons">
                            <Link to={`/Contact/Edit/${contact._id}`}><i className="fas fa-edit"></i></Link>
                        </button>
                        <button title="Remove" className="button-icons" onClick={this.deleteClickHandler}><i className="far fa-trash-alt"></i></button>
                    </section>
                    <img src={`https://robohash.org/${contact.name}.png`} alt="" />
                    <h1>{contact.name}</h1>
                    <h3>{contact.email}</h3>
                    <h3>{contact.phone}</h3>
                    {loggedInUser && <TransferFund contact={contact} loggedInUser={loggedInUser} onTransferCoins={this.onTransferCoins} />}
                    {loggedInUser.moves && <MovesList moves={loggedInUser.moves.filter(move => move.to === contact._id)} />}
                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    // console.log('state in ContactDetails:', state.user.loggedInUser)
    return {
        contact: state.contact.contact,
        loggedInUser: state.user.loggedInUser
    }
}
const mapDispatchToProps = {
    loadCotnact,
    deleteContact,
    clearContact,
    addMove

}
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails)
