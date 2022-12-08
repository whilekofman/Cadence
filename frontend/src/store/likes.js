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

export const fetchLikesActivities = (activityIds) => async dispatch => {
    const res = await csrfFetch(`api/likes`)
}