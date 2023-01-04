import csrfFetch from "./csrf";

export const RETRIEVE_FOLLOWERS = 'follows/RETRIEVE_FOLLOWS'
export const RETRIEVE_FOLLOWING = 'follows/RETRIEVE_FOLLOWING'
export const REMOVE_FOLLOW = 'followId/REMOVE_FOLLOW'

export const retrieveFollowers = follows => ({
    type: RETRIEVE_FOLLOWERS,
    follows
})

export const retrieveFollowing = follows => ({
    type: RETRIEVE_FOLLOWING,
    follows
})

export const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
})

export const getFollows = ({ follows }) => follows ? Object.values(follows) : []


export const fetchFollows = ( userId, type ) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}/follows?type=${type}`)
    const data = await res.json();
    // dispatch(retrieveFollows(data))
}

export const deleteFollow = followId => async dispatch => {
    const res = await csrfFetch (`/api/follows/${followId}`, {
        method: 'DELETE'
    })
    dispatch(removeFollow(followId))  
}

export const newFollow = ( currentUserId, follow ) => async dispatch => {
    const res = await csrfFetch('/api/follow', {
        method: 'POST',
        body: JSON.stringify(follow),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await res.json()
    fetchFollows(currentUserId, 'following' )

}

export const followingReducer = ( state = {}, action ) => {
    const nextState = { ...state };
    switch (action.type) {
        case RETRIEVE_FOLLOWERS:
            return { ...nextState, ...action.follows }
        default: 
            return state
    } 
}

const followReducer = ( state = {}, action ) => {
    const nextState = { ...state };
    switch (action.type) {

        case RETRIEVE_FOLLOWING:
            return { ...nextState, ...action.follows}
        case REMOVE_FOLLOW:
            delete nextState[action.followId]
            return nextState
        default:
            return state;
    }
}


export default followReducer