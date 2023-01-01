import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import './index.css';
import App from './App';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session'
import * as activitytActions from './store/activities'
import * as userActions from './store/users'



const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions
  window.activitytActions = activitytActions
  window.userActions = userActions
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />      
      </BrowserRouter>
    </Provider>
  )
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if (sessionStorage.getItem("X-CSRF-Token") === null ||
  sessionStorage.getItem("currentUser") !== null) { 
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}