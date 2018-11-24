// export const createLocation = (location) => {
//     return (dispatch, getState, {getFirebase, getFirestore}) => {
//         // make async call to create database
//         const firestoreDB = getFirestore(); 
//         firestoreDB.collection('locations').add({
//             ...location
//         }).then(() => {
//             dispatch({type: 'CREATE_LOCATION', location}); 
//         }).catch((err) => {
//             dispatch({type: 'CREATE_LOCATION_ERROR', err}); 
//         })
//     }; 
// };

export const getLocation = (key) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestoreDB = getFirestore();
        const dbRef = firestoreDB.collection("locations");
        dbRef.where("key", "==", key).get()
            .then((querySnapshot) => querySnapshot.forEach((doc) => {
                dispatch({type: 'FOUND_SINGLE_LOCATION', location: doc.data()})
            }
            ))
    }
}