import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux'; 
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from 'firebase'; 
import firebaseConfig from './config/firebaseConfig'; 
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore'; 
import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase, {attachAuthIsReady: true}),
        reduxFirestore(firebase)
    ));

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
