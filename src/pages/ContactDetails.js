import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faEdit, faTrashAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { loadCotnact, deleteContact, clearContact } from '../actions/ContactAction'
import { addMove, loadUser } from '../actions/UserAction'

import TransferFund from '../cmps/TransferFund'
import MovesList from '../cmps/MovesList'


const ContactDetails = (props) => {
    const { contact, loggedInUser } = props
    const dispatch = useDispatch()

    useEffect(() => {
        getContactById();

    }, [props.match.params])


    const getContactById = async () => {
        const id = props.match.params.id;
        dispatch(loadCotnact(id));
    }
    const onTransferCoins = async (amount) => {
        dispatch(addMove(contact, amount));
        dispatch(loadUser());
    }
    const deleteClickHandler = async () => {
        props.history.go(-1);
        dispatch(deleteContact(contact._id))
    }

    const onGoBackClickHandler = (ev) => {
        props.history.go(-1);
    }

    if (!loggedInUser) return <div>Please login first</div>
    if (!contact) {
        return <div>Loading... </div>;
    } else {
        return (
            <div className="contact-details page">
                <section className="contact-section">
                    <div className="user-img-wrapper card-on-feed">
                        <img className="contact-img" src={`https://robohash.org/${contact.name}.png`} alt="" />
                        <h1>{contact.name}</h1>
                        <section className="btns-sec">
                            <button title="Return" className="buttons" onClick={onGoBackClickHandler}><FontAwesomeIcon icon={faUndo} /></button>
                            <button title="Details" className="buttons">
                                <Link to={`/Contact/Edit/${contact._id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                            </button>
                            <button title="Remove" className="buttons" onClick={deleteClickHandler}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </section>
                    </div>
                    <section className="info-section card-on-feed">
                        <p><span><FontAwesomeIcon icon={faEnvelope} /></span>{contact.email}</p>
                        <p><span><FontAwesomeIcon icon={faPhone} /></span>{contact.phone}</p>
                    </section>
                </section>

                <section className="feed-section">
                    {loggedInUser && <TransferFund contact={contact} loggedInUser={loggedInUser} onTransferCoins={onTransferCoins} />}
                    {loggedInUser && <MovesList moves={loggedInUser.moves.filter(move => move.to === contact._id)} />}
                </section>
            </div>
        )
    }


}
const mapStateToProps = (state) => {
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
