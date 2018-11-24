import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'; 
import locationReducer from './locationReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer, 
    firestore: firestoreReducer, 
    location: locationReducer
});

export default rootReducer; 