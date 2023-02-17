import React from 'react';
import ReactDOM from 'react-dom/client';
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
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
};

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}