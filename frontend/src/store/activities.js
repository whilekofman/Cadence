import csrfFetch from "./csrf"

export const RETRIEVE_ACTIVITIES = 'activities/RETRIEVE_ACTIVITIES'
export const RETRIEVE_ACTIVITY = 'activity/RETRIEVE_ACTIVITY'
export const REMOVE_ACTIVITY = 'activity/REMOVE_ACTIVITY'

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

export const getActivities = ({ activities }) => activities ? Object.values(activities) : []

export const getActivity = activityId => ({ activities }) => activities ? activities[activityId] : null


export const fetchActivities = () => async dispatch => {
    const res = await csrfFetch('/api/activities')
    const data = await res.json();
    dispatch(retrieveActivities(data))
}

export const deleteActivity = activityId => async dispatch => {
    // const res = 
    await csrfFetch(`api/activities/${activityId}`, {
        method: 'DELETE'
    })
    dispatch (removeActivity(activityId))
}

export const fetchActivity = (activityId) => async dispatch => {
    const res = await fetch(`/api/activities/${activityId}`)
    debugger
    if (res.ok){
        const data = await res.json()
        debugger
        dispatch(retrieveActivity(data))
        return data
    } else { throw res }
}

 
const activityReducer = ( state = {}, action ) => {
    let nextState = { ...state };
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case RETRIEVE_ACTIVITIES:
            // nextState.activities = action.activities
            nextState = { ...nextState, ...action.activities }
            return nextState
        case RETRIEVE_ACTIVITY:
            nextState[action.activityId] = action.activity
            // debugger
            return nextState
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId]
            return nextState
        default:
            return { ...nextState }
    }
}

export default activityReducer