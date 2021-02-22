import UserService from '../services/user.service'

export function loadUser(userCredentials) {
    if (userCredentials) {
        return async dispatch => {
            const loggedInUser = await UserService.getUser(userCredentials);
            dispatch({ type: 'SET_USER', loggedInUser })
        }
    } else {
        return async dispatch => {
            const loggedInUser = await UserService.getUser();
            dispatch({ type: 'SET_USER', loggedInUser })
        }

    }
}
export function logOut() {
    return async dispatch => {
        await UserService.logOut();
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
        const moves = loggedInUser.moves
        dispatch({ type: 'SET_USER_MOVES', moves })
    }
}
