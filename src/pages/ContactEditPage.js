import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { loadCotnact, saveContact } from '../actions/ContactAction';

const ContactEditPage = (props) => {
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        _id: '',
        name: '',
        email: '',
        phone: ''

    })
    useEffect(() => {
        const id = props.match.params.id;
        const getContact = async () => {
            await dispatch(loadCotnact(id))
            setContact(props.contact)
        }
        if (id) getContact()
    }, [props.match.params])

    const saveNewContact = async (ev) => {
        ev.preventDefault();
        await dispatch(saveContact(contact))
        props.history.go(-1);

    }
    const handleChange = (ev) => {
        ev.preventDefault();
        const { name, value } = ev.target;
        setContact({
            ...contact,
            [name]: value
        })

    }

    return (
        <div className="contact-edit page">
            {contact._id ? (<h1 className="page-header">Edit {contact.name}</h1>) : (<h1 className="page-header">Add new contact</h1>)}
            <form onSubmit={(ev) => saveNewContact(ev)}>
                <label>Enter a contact name: </label>
                <input
                    type="text"
                    placeholder="Contact Name"
                    name="name"
                    value={contact.name}
                    onChange={(ev) => handleChange(ev)}
                />
                <label>Enter email: </label>
                <input
                    type="email"
                    placeholder="Contact email"
                    name="email"
                    value={contact.email}
                    onChange={(ev) => handleChange(ev)}
                />
                <label>Enter phone number: </label>
                <input
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                    value={contact.phone}
                    onChange={(ev) => handleChange(ev)}
                />
                <button>Save</button>
            </form>
        </div>
    )

}


const mapStateToProps = (state) => {
    return {
        contact: state.contact.contact
    }
}
const mapDispatchToProps = {
    loadCotnact,
    saveContact
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage)