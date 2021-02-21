const USERS =
    [{
        "_id": "5a5664024c096d04eeb13a8a",
        "name": "Ochoa Hyde",
        "password": '1234',
        "coins": 100,
        "moves": []
    },
    {
        "_id": "5a3664028c093d08eeb13a8a",
        "name": "rotem",
        "password": '1234',
        "coins": 200,
        "moves": []
    }]

let loggedInUser = JSON.parse(sessionStorage.getItem('logged user'));
let usersInStorage = ((sessionStorage.getItem('users'))) ? JSON.parse(sessionStorage.getItem('users')) : _setUsers()

async function getUser(credentials) {
    return (credentials) ? _login(credentials) : loggedInUser
}
async function signUp(user) {
    const newUser = _createUser(user);
    usersInStorage.push(newUser);
    sessionStorage.setItem('users', JSON.stringify(usersInStorage));
    sessionStorage.setItem('logged user', JSON.stringify(newUser));
    return getUser();
}
async function addMove(contact, amount) {
    if (loggedInUser.coins >= amount) {
        loggedInUser.coins -= amount;
        let move = {
            date: new Date(),
            amount: amount,
            to: contact._id
        }
        if (loggedInUser.moves) {
            loggedInUser.moves.unshift(move)
        } else {
            loggedInUser.moves = [move]
        }
        const userIdx = usersInStorage.findIndex(currUser => currUser.name === loggedInUser.name)
        usersInStorage.splice(userIdx, 1, loggedInUser)
        sessionStorage.setItem('users', JSON.stringify(usersInStorage));
        sessionStorage.setItem('logged user', JSON.stringify(loggedInUser));
    }
    return getUser();
}
async function logOut() {
    if (!loggedInUser) return
    loggedInUser = null;
    sessionStorage.removeItem('logged user');
}
export default {
    getUser,
    logOut,
    signUp,
    addMove
}
function _login(credentials) {
    let userFound = usersInStorage.filter(user => {
        return (user.name === credentials.name && user.password === credentials.password)
    })
    userFound = userFound[0];
    if (userFound) sessionStorage.setItem('logged user', JSON.stringify(userFound));
    loggedInUser = userFound;
    return getUser();

}
function _setUsers() {
    sessionStorage.setItem('users', JSON.stringify(USERS))
    return JSON.parse(sessionStorage.getItem('users'))
}

function _createUser(user) {
    return {
        "_id": _makeId(),
        "name": user.name,
        "password": user.password,
        "coins": 100,
        "moves:": []
    }
}
function _makeId(length = 10) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

