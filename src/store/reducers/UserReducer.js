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
        case 'ADD_MOVE':
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, moves: action.moves, coins: action.coins }
            }

        default:
            return state;
    }
};
