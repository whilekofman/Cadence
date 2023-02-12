import { retrieveActivities } from "./activities";
import csrfFetch from "./csrf";
import { retrieveFollowers, retrieveFollowing } from "./follows";

export const RETRIEVE_USERS = "users/RETRIEVE_USERS";
export const RETRIEVE_USER = "user/RETRIEVE_USER";
export const REMOVE_USER = "user/REMOVE_USER";

export const retrieveUsers = (users) => ({
    type: RETRIEVE_USERS,
    users,
});

export const retrieveUser = (user) => ({
    type: RETRIEVE_USER,
    user,
});

// export const removeUser = userId => ({
//     type: REMOVE_USER,
//     userId
// })

export const getUsers = ({ users }) => (users ? Object.values(users) : []);
export const getUser =
    (userId) =>
    ({ users }) =>
        users ? users[userId] : null;

export const fetchUsers = () => async (dispatch) => {
    const res = await csrfFetch("/api/users");
    const data = await res.json();
    dispatch(retrieveUsers(data));
};

export const updateUserProfilePicture = (user, formData) => async (dispatch) =>{

    const res = await csrfFetch(`/api/users/${user.id}`,{ 
        method: 'PATCH',
        body: formData,
    }) 
    window.location.reload(true);


}

export const fetchUser = (user) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${user}`);
    const data = await res.json();
    dispatch(retrieveUser(data.user));
    dispatch(retrieveFollowing(data.follows));
    dispatch(retrieveFollowers(data.followedBy));
    dispatch(retrieveActivities(data.activities));
};

const usersReducer = (state = {}, action) => {
    let nextState = { ...state };
    switch (action.type) {
        case RETRIEVE_USERS:
            nextState = { ...nextState, ...action.users };
            return nextState;
        case RETRIEVE_USER:
            nextState[action.user.id] = action.user;
        default:
            return nextState;
    }
};

export default usersReducer;
