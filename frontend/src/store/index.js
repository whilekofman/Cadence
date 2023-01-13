import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import activityReducer from './activities';
import sessionReducer from './session';
import commentReducer from './comments';
import likeReducer from './likes';
import followReducer, { followingReducer } from './follows';
import usersReducer from './users'


export const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    following: followReducer,
    followers: followingReducer,
    activities: activityReducer,
    comments: commentReducer,
    likes: likeReducer,
    
    
    // users: userReducer

});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;