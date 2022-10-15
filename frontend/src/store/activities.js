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

export const getActivity = activity => ({ activities }) => activities ? activities[activity] : null

export const fetchActivities = () => async dispatch => {
    const res = await csrfFetch('/api/activities')
    const data = await res.json();
    dispatch(retrieveActivities(data))
}
// const initialState = {
//     user: JSON.parse(sessionStorage.getItem("currrentUser"))
// } 
 
const activityReducer = ( state = {}, action ) => {
    let nextState = { ...state };
    // debugger
    switch (action.type) {
        case RETRIEVE_ACTIVITIES:
            // nextState.activities = action.activities
            nextState = { ...nextState, ...action.activities }
            // debugger
            return nextState
        default:
            return state
    }
}

export default activityReducer