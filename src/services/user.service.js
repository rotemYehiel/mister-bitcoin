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

const usersInStorage = ((localStorage.getItem('users'))) ? JSON.parse(localStorage.getItem('users')) : _setUsers()

function getUser(credentials) {
    const user = JSON.parse(localStorage.getItem('logged user'));
    return (credentials) ? _login(credentials) : (user ? user : null)
}
async function signUp(user) {
    const newUser = _createUser(user);
    usersInStorage.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersInStorage));
    localStorage.setItem('logged user', JSON.stringify(newUser));
    return getUser();
}
function addMove(contact, amount) {
    const user = JSON.parse(localStorage.getItem('logged user'))
    if (user.coins >= amount) {
        user.coins -= amount;
        let move = {
            date: new Date(),
            amount: amount,
            to: contact._id
        }
        if (user.moves) {
            user.moves.unshift(move)
        } else {
            user.moves = [move]
        }
        const userIdx = usersInStorage.findIndex(currUser => currUser.name === user.name)
        usersInStorage.splice(userIdx, 1, user)
        localStorage.setItem('users', JSON.stringify(usersInStorage));
        localStorage.setItem('logged user', JSON.stringify(user));
    }

    return getUser();
}
function logOut() {
    localStorage.removeItem('logged user');
}
export default {
    getUser,
    logOut,
    signUp,
    addMove
}
function _login(credentials) {
    const userFound = usersInStorage.find(user => {
        return (user.name === credentials.name && user.password === credentials.password)
    })
    if (userFound) localStorage.setItem('logged user', JSON.stringify(userFound));
    return JSON.parse(localStorage.getItem('logged user'));
}
function _setUsers() {
    localStorage.setItem('users', JSON.stringify(USERS))
    return JSON.parse(localStorage.getItem('users'))
}

function _createUser(user) {
    return {
        "_id": _makeId(),
        "name": user.name,
        "password": user.password,
        "coins": 100,
        "moves": []
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

