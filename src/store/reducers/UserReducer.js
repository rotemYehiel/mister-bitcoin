const initialState = {
    loggedInUser: null
}
export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedInUser: (action.loggedInUser) ? action.loggedInUser : null
            }
        case 'SET_USER_MOVES':
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, moves: action.moves }
            }

        default:
            return state;
    }
};
