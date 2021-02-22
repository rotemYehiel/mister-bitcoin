import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { loadCotnacts } from '../actions/ContactAction';

import ContactFilter from '../cmps/ContactFilter'
import ContactList from '../cmps/ContactList'

const ContactPage = (props) => {
    const { contacts, loggedInUser } = props;
    const [filterBy, setFilterBy] = useState({ term: '' })
    const dispatch = useDispatch()

    useEffect(() => {
        getContacts();
        if (!loggedInUser) dispatch(loadCotnacts());
    }, [filterBy.term])

    const getContacts = () => {
        dispatch(loadCotnacts(filterBy))
    }
    const onFilterHandler = (termToFilterBy) => {
        setFilterBy(termToFilterBy)
        getContacts();
    }


    if (!contacts) {
        return <h3>no contacts yet...</h3>
    }
    return (
        <div className="contact-page">
            <ContactFilter filterBy={filterBy} onFilter={(termToFilterBy) => onFilterHandler(termToFilterBy)} />
            <ContactList contacts={contacts} />
            <button className="add-contact-btn">
                <Link to={'/Contact/Edit'}>
                    <i className="fas fa-plus"></i>
                </Link>
            </button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.user.loggedInUser,
        contacts: state.contact.contacts
    }
}
const mapDispatchToProps = {
    loadCotnacts
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactPage)

