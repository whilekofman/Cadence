import csrfFetch from "./csrf"


export const RETRIEVE_COMMENTS = 'comments/RETRIEVE_COMMENTS'
export const RETRIEVE_COMMENT = 'comment/RETRIEVE_COMMENT'
export const REMOVE_COMMENT = 'commentId/REMOVE_COMMENT'

export const retrieveComments = comments => ({
    type: RETRIEVE_COMMENTS,
    comments
})

export const retrieveComment = comment => ({
    type: RETRIEVE_COMMENT,
    comment
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})



export const getComments = ({ comments }) => comments ? Object.values(comments) : []

export const getComment = commentId => ({ comments }) => comments ? comments[commentId] : null


export const fetchComments = () => async dispatch => {
    // const res = await csrfFetch(`/api/activities/${activityId}/comments`)
    const res = await csrfFetch(`/api/comments`)
    const data = await res.json();
    dispatch(retrieveComments(data))
}

export const deleteComment = commentId => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })
    dispatch(removeComment(commentId))
    // dispatch(fetchComments())
}

export const fetchComment = commentId => async dispatch => {
    debugger
    const res = await csrfFetch(`/api/comments/${commentId}`)
    if (res.ok){
        const data = await res.json()
        dispatch(retrieveComment(data))
        return data
    } else { throw res }
}

export const newComment = (comment) => async dispatch => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    
    const data = await res.json()
    // dispatch(retrieveComments(data))

    // dispatch(retrieveComment(data))
    


}
 
export const updateComment = (comment) => async dispatch => {
    try {
        const res = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PATCH',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type' : 'application/json'
            }
        })
        const data = await res.json()
        dispatch(retrieveComment(data))
        
        
    } catch (error) {

    }

}


// const initialState = {
//     comments: []
// }


const commentReducer = ( state = {}, action ) => {
    const nextState = { ...state };
    Object.freeze(state)
    switch (action.type) {
        case RETRIEVE_COMMENTS:
            return { ...nextState, ...action.comments };
            // nextState = action.comments 
            // return nextState; 
        case RETRIEVE_COMMENT:
            nextState[action.comment.id] = action.comment;         
            return nextState;
        case REMOVE_COMMENT:

            delete nextState[String(action.commentId)];
           
            return nextState

        default:
            return state;
    }
}

export default commentReducer