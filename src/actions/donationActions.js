export const createDonation = (donation) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore(); 
        firestore.collection('donations').add({
            ...donation, 
            entered_by: getState().firebase.auth.uid,
            lastUpdated: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_DONATION', donation})
        }).catch((err) => {
            dispatch({type: 'CREATE_DONATION_ERROR', err})
        })
    }
}