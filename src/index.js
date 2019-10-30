import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ViewProperty from './components/ViewProperty';
import store from './server/store';
import * as serviceWorker from './serviceWorker';
import { Route, Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App} />
            <Route exact path="/:id" component={ViewProperty} />
        </Router>
    </Provider>,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
