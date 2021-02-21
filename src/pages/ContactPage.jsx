// import React, { PureComponent } from 'react'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadCotnacts } from '../actions/ContactAction';

import ContactFilter from '../cmps/ContactFilter'
import ContactList from '../cmps/ContactList'

// class ContactPage extends PureComponent {
class ContactPage extends PureComponent {
    state = {
        filterBy: {
            term: '',
        }
    }
    async componentDidMount() {
        this.props.loadCotnacts();
    }
    loadContacts = () => {
        this.props.loadCotnacts(this.state.filterBy)
    }
    onFilterHandler = (filterBy) => {
        this.setState((prevState) => {
            return {
                filterBy: {
                    ...prevState.filterBy,
                    ...filterBy,
                },
            };
        }, this.loadContacts);
    };
    render() {
        const { contacts } = this.props;
        if (!contacts) {
            return <h3>no contacts yet...</h3>
        }
        return (
            <div className="contact-page">
                <ContactFilter filterBy={this.state.filterBy} onFilter={this.onFilterHandler} />
                <ContactList contacts={contacts} />
                <button className="add-contact-btn">
                    <Link to={'/Contact/Edit'}>
                        <i className="fas fa-plus"></i>
                    </Link>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts
    }
}
const mapDispatchToProps = {
    loadCotnacts
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactPage)

