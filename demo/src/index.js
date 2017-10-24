import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';


// HashRouter can only take one child component
// We're putting it here so we can use Link, Switch, etc... anywhere in our app and not have to worry about wrapping it with HashRouter

ReactDOM.render(
  <Router>
    <App />
  </Router>,
document.getElementById('root'));
// registerServiceWorker();
