import React from 'react'

const ContactPreview = (props) => {
    const { currContact } = props
    return (
        <div className="contact-preview">
            <img className="contact-img" src={`https://robohash.org/${currContact.name}`} alt="" />
            <h3 className="contact-name">{currContact.name}</h3>
        </div>
    )
}

export default ContactPreview
