import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'; 
import locationReducer from './locationReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer'; 

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer, 
    firestore: firestoreReducer, 
    location: locationReducer,
    donationSearch: searchReducer,
});

export default rootReducer; 