import csrfFetch from "./csrf";

export const RETRIEVE_LIKES = 'likes/RETRIEVE_LIKES'
export const REMOVE_LIKE = 'likeId/REMOVE_LIKE'

export const retrieveLikes = likes => ({
    type: RETRIEVE_LIKES,
    likes
})

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
})

export const getLikes = ({ likes }) => likes ? Object.values(likes) : []

//may not need the single like selector
export const getLike = likeId => ({ likes }) => likes ? likes[likeId] : null 

export const fetchLikesActivities = (activityIds) => async dispatch => {
    const res = await csrfFetch(`/api/likes/?likeable=activity&ids=${activityIds.join(",")}`)
    const data = await res.json();
    dispatch(retrieveLikes(data))
}

export const fetchLikesComments = (activityIds) => async dispatch => {
    const res = await csrfFetch(`/api/likes/?likeable=comment&ids=${activityIds.join(",")}`)
    const data = await res.json();
    
    dispatch(retrieveLikes(data))
}

export const deleteLike = likeId => async dispatch => {
    const res = await csrfFetch (`/api/likes/${likeId}`, {
        method: 'DELETE'
    })
    dispatch(removeLike(likeId))  
}

export const newLike = ( like, likeableType, likeableId) => async dispatch => {
    const res = await csrfFetch('/api/likes', {
        method: 'POST',
        body: JSON.stringify(like),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await res.json()
    if (likeableType === "Activity") {
        dispatch(fetchLikesActivities([likeableId]))
    } else {
        dispatch(fetchLikesComments([likeableId]))
    }
}

const likeReducer = ( state = {}, action ) => {
    const nextState = { ...state };
    switch (action.type) {
        case RETRIEVE_LIKES:
            return { ...nextState, ...action.likes}
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState
        default:
            return state;
    }
}

export default likeReducer