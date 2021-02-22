import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//rce
import { loadCotnact, deleteContact, clearContact } from '../actions/ContactAction'
import { addMove } from '../actions/UserAction'

import TransferFund from '../cmps/TransferFund'
import MovesList from '../cmps/MovesList'


const ContactDetails = (props) => {
    const { contact, loggedInUser } = props
    const dispatch = useDispatch()

    useEffect(() => {
        getContactById();

    }, [props.match.params])


    const getContactById = async () => {
        console.log(props.match.params.id)
        const id = props.match.params.id;
        dispatch(loadCotnact(id));
    }
    const onTransferCoins = async (amount) => {
        dispatch(addMove(contact, amount));
    }
    const deleteClickHandler = async () => {
        props.history.go(-1);
        dispatch(deleteContact(contact._id))
    }

    const onGoBackClickHandler = (ev) => {
        props.history.go(-1);
    }


    if (!contact) {
        return <div>Loading... </div>;
    } else {
        return (
            <div className="contact-details">
                <section className="btns-sec">
                    <button title="Return" className="button-icons" onClick={onGoBackClickHandler}><i className="fas fa-undo"></i></button>
                    <button title="Details" className="button-icons">
                        <Link to={`/Contact/Edit/${contact._id}`}><i className="fas fa-edit"></i></Link>
                    </button>
                    <button title="Remove" className="button-icons" onClick={deleteClickHandler}><i className="far fa-trash-alt"></i></button>
                </section>
                <img src={`https://robohash.org/${contact.name}.png`} alt="" />
                <h1>{contact.name}</h1>
                <h3>{contact.email}</h3>
                <h3>{contact.phone}</h3>
                {loggedInUser && <TransferFund contact={contact} loggedInUser={loggedInUser} onTransferCoins={onTransferCoins} />}
                {loggedInUser.moves && <MovesList moves={loggedInUser.moves.filter(move => move.to === contact._id)} />}
            </div>
        )
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
