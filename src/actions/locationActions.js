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
    console.log(key);
    console.log("NOT FUNCTIONED YET");
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log(key);
        const firestoreDB = getFirestore();
        const dbRef = firestoreDB.collection("locations");
        const query = {
            where: ['key', '==', "1"]
        };
        dbRef.where("key", "==", "1").get()
            .then((querySnapshot) => querySnapshot.forEach((doc) => {
                console.log(doc);
                dispatch({type: 'FOUND_SINGLE_LOCATION', location: doc.data()})
            }
            ))
    }
}