const initState = {
    location: {
    }
}
const locationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_LOCATION':
            return state; 
        case 'CREATE_LOCATION_ERROR': 
            return state; 
        case 'FOUND_SINGLE_LOCATION':
            return action.location;
        default:
            return state; 
    }
}

export default locationReducer; 