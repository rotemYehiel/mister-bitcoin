const initialState = {
    loggedInUser: null
}
export default function UserReducer(state = initialState, action) {
    // console.log("action in reducer:", action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedInUser: action.loggedInUser
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
