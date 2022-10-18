import csrfFetch from "./csrf";

export const SET_CURRENT_USER = "session/SET_CURRENT_USER"
export const REMOVE_CURRENT_USER = "session/REMOVE_CURRENT_USER"

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

export const getSession = ({ session }) => session ? session.user : null

// export const sessionUser = sessionStorage.getItem('currentUser') ? currentUser : null

export const storeCurrentUser = user => {
    if (user) {sessionStorage.setItem("currentUser", JSON.stringify(user)) 
    } else {
    sessionStorage.removeItem("currentUser")
    }
}

export const signup = user => async dispatch => {
    
    const { email, fname, lname, weight, password } = user;
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            fname,
            lname,
            weight,
            password            
        }),

    })
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user))
    return res;
}

export const login = ({ credential, password }) => async dispatch => {
    const res = await csrfFetch('api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });
    const data = await res.json();
    storeCurrentUser(data.user)
    dispatch(setCurrentUser(data.user));
    return res;
}

export const logout = () => async dispatch => {
    const res = await csrfFetch ('api/session', {
        method: 'DELETE',
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return res;
}
export const restoreSession = () => async dispatch => {
    const res = await csrfFetch('api/session');
    storeCSRFToken(res);
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
}

export const storeCSRFToken = res => {
    const csrfToken = res.headers.get("X-CSRF-Token")
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const initialState = {
    user: JSON.parse(sessionStorage.getItem("currrentUser"))
}


const sessionReducer = ( state = initialState, action ) => {
    Object.freeze(state)
    let nextState = {...state}
    switch (action.type) {
        
        case SET_CURRENT_USER:
            nextState.user = action.user
            return nextState;
        case REMOVE_CURRENT_USER:
            // return { ...nextState, user: null };
            nextState.user = null;
            return nextState
        // case SET_CURRENT_USER:
        //     return { ...nextState, ...action.user };
        // case REMOVE_CURRENT_USER:
        //     return { ...nextState, user: null };
        default:
            // return initialState;
            return { ...nextState }
    }
}

export default sessionReducer;

