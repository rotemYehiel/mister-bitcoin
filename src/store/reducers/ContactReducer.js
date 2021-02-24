const initialState = {
    contacts: [],
    contact: null
}
export default function ContactReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return { ...state, contacts: action.contacts }
        case 'SET_CONTACT':
            return { ...state, contact: action.contact }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    return (contact._id === action.contact._id) ? action.contact : contact
                })
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.contact._id)
            };
        default:
            return state;
    }
};
