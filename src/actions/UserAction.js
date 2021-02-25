import UserService from '../services/user.service'

export function loadUser(userCredentials = null) {
    return async dispatch => {
        const loggedInUser = await UserService.getUser(userCredentials);
        dispatch({ type: 'SET_USER', loggedInUser })
    }

}
export function logOut() {
    return dispatch => {
        UserService.logOut();
        dispatch({ type: 'SET_USER', loggedInUser: null })
    }
}
export function signUp(newUser) {
    return async dispatch => {
        const loggedInUser = await UserService.signUp(newUser);
        dispatch({ type: 'SET_USER', loggedInUser })
    }
}
export function addMove(contact, amount) {
    return async dispatch => {
        const loggedInUser = await UserService.addMove(contact, amount);
        const moves = loggedInUser.moves;
        const coins = loggedInUser.coins;
        dispatch({ type: 'ADD_MOVE', moves, coins })
    }
}
