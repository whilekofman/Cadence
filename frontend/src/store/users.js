import csrfFetch from "./csrf"

export const RETRIEVE_USERS = 'users/RETRIEVE_USERS'
export const RETRIEVE_USER = 'user/RETRIEVE_USER'
export const REMOVE_USER = 'user/REMOVE_USER'

export const retrieveUsers = users => ({
    type: RETRIEVE_USERS,
    users
})

export const retrieveUser = user => ({
    type: RETRIEVE_USER,
    user
})

// export const removeUser = userId => ({
//     type: REMOVE_USER,
//     userId
// })

export const getUsers = ({ users }) => users ? Object.values(users) : []

export const getUser = user => ({ users }) => users ? users[user] : null

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('api/users')
    const data = await res.json();
    dispatch(retrieveUsers(data));
}

export const fetchUser = (user) => async dispatch => {
    const res = await csrfFetch(`api/users/${user.id}`)
    const data = await res.json();
    dispatch (retrieveUser(data));
}

const userReducer = ( state = {}, action) => {
    let nextState = { ...state };
    switch (action.type) {
        case RETRIEVE_USERS:
            nextState = { ...nextState, ...action.users }
            return nextState
        // case REMOVE_USER:
        //     nextState = 
        default:
            return nextState

    }
}

export default userReducer