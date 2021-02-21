import React from 'react'
import { Link } from 'react-router-dom';

import ContactPreview from './ContactPreview'


const ContactList = (props) => {
    const { contacts } = props
    return (
        <ul className="contact-list">
            {contacts.map((contact, index) => (
                <li key={index} className="contact">
                    <Link to={'/Contact/' + contact._id}>
                        <ContactPreview currContact={contact}></ContactPreview>
                    </Link>
                </li>
            ))}

        </ul>
    )
}

export default ContactList