import ContactService from '../services/contact.service'

export function loadCotnacts(filterBy) {
    return async dispatch => {
        const contacts = await ContactService.getContacts(filterBy);
        dispatch({ type: 'SET_CONTACTS', contacts })
    }
}

export function loadCotnact(id) {
    return async dispatch => {
        const contact = await ContactService.getContactById(id);
        dispatch({ type: 'SET_CONTACT', contact })
    }
}

export function saveContact(currContact) {
    return async dispatch => {
        let isUpdate = false;
        (currContact._id) ? isUpdate = true : isUpdate = false;
        const contact = await ContactService.saveContact(currContact);
        if (isUpdate) {
            dispatch({ type: 'UPDATE_CONTACT', contact })
        } else {
            dispatch({ type: 'ADD_CONTACT', contact })
        }
        return contact;
    }
}
export function deleteContact(id) {
    return async dispatch => {
        const contact = await ContactService.deleteContact(id);
        dispatch({ type: 'DELETE_CONTACT', contact })
    }
}

export function clearContact() {
    return async dispatch => {
        dispatch({ type: 'SET_CONTACT', contact: null })
    }
}