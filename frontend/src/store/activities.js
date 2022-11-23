import csrfFetch from "./csrf"


export const RETRIEVE_ACTIVITIES = 'activities/RETRIEVE_ACTIVITIES'
export const RETRIEVE_ACTIVITY = 'activity/RETRIEVE_ACTIVITY'
export const REMOVE_ACTIVITY = 'activity/REMOVE_ACTIVITY'
export const CLEAR_ACTIVITY = 'activity/CLEAR_ACTIVITY'

export const retrieveActivities = activities => ({
    type: RETRIEVE_ACTIVITIES,
    activities
})

export const retrieveActivity = activity => ({
    type: RETRIEVE_ACTIVITY,
    activity
})

export const removeActivity = activityId => ({
    type: REMOVE_ACTIVITY,
    activityId
})

export const clearActivity = () => ({
    type: CLEAR_ACTIVITY
})

export const getActivities = ({ activities }) => activities ? Object.values(activities) : []

export const getActivity = activityId => ({ activities }) => activities ? activities[activityId] : null

export const removeActivities = () => async dispatch => {
    dispatch(clearActivity)
}

export const fetchActivities = () => async dispatch => {
    const res = await csrfFetch('/api/activities')
    const data = await res.json();
    dispatch(retrieveActivities(data))
}

export const deleteActivity = activityId => async dispatch => {
    const res = await csrfFetch(`/api/activities/${activityId}`, {
        method: 'DELETE'
    })
    dispatch(removeActivity(activityId))
    dispatch(fetchActivities)
}

export const fetchActivity = id => async dispatch => {
    const res = await csrfFetch(`/api/activities/${id}`)
    if (res.ok){
        const data = await res.json()
        dispatch(retrieveActivity(data))
        return data
    } else { throw res }
}

export const newActivity = (activity, history) => async dispatch => {
    const res = await csrfFetch('/api/activities', {
        method: 'POST',
        body: JSON.stringify(activity),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await res.json()
    dispatch(retrieveActivity(data))
    history.push(`/activities/${data.id}`)
}
 
export const updateActivity = (activity, history) => async dispatch => {
    try {
        const res = await csrfFetch(`/api/activities/${activity.id}`, {
        method: 'PATCH',
        body: JSON.stringify(activity),
        headers: {
            'Content-Type' : 'application/json'
            }
        })
        const data = await res.json()
        dispatch(retrieveActivity(data))
        history.push(`/activities/${data.id}`)
        
        
    } catch (error) {

    }

}





const activityReducer = ( state = {}, action ) => {
    let nextState = { ...state };
    Object.freeze(state)
    switch (action.type) {
        case RETRIEVE_ACTIVITIES:
            nextState = { ...nextState, ...action.activities }
            return { ...nextState } 
        case RETRIEVE_ACTIVITY:
            nextState[action.activity.id] = action.activity
            return { ...nextState }
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId]
            
            return nextState
        case CLEAR_ACTIVITY:
            return {}
        default:
            return state 
    }
}

export default activityReducer