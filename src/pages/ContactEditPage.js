import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

import { loadCotnact, saveContact } from '../actions/ContactAction';

class ContactEditPage extends PureComponent {
    state = {
        contact: {
            _id: '',
            name: '',
            email: '',
            phone: ''

        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        if (id) {
            await this.props.loadCotnact(id)
            this.setState({ contact: { ...this.props.contact } })
            // const currContact = await ContactService.getContactById(id);
            // console.log(this.props.contact)
        }

    }

    saveContact = async (ev) => {
        ev.preventDefault();
        await this.props.saveContact(this.state.contact)
        // const contact = await this.props.saveContact(this.state.contact)
        // const contact = await ContactService.saveContact(this.state.contact);
        // console.log('contact', contact);
        this.props.history.go(-1);

    }
    handleChange = (ev) => {

        const { name, value } = ev.target;
        this.setState((prevState) => {
            return {
                contact: {
                    ...prevState.contact,
                    [name]: value
                },
            };
        });
    }
    render() {
        const { contact } = this.state;
        return (
            <div className="page">
                <h1>Add new contact</h1>
                <form onSubmit={this.saveContact}>
                    <label>Enter a contact name: </label>
                    <input
                        type="text"
                        placeholder="Contact Name"
                        name="name"
                        value={contact.name}
                        onChange={this.handleChange}
                    />
                    <label>Enter email: </label>
                    <input
                        type="email"
                        placeholder="Contact Email"
                        name="email"
                        value={contact.email}
                        onChange={this.handleChange}
                    />
                    <label>Enter phone number: </label>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={contact.phone}
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
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