const initState = {
    location: {
    }
}
const locationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_LOCATION':
            console.log("Created a location", action.location);
            return state; 
        case 'CREATE_LOCATION_ERROR':
            console.log("Error with creating a location"); 
            return state; 
        case 'FOUND_SINGLE_LOCATION': 
            console.log("Found single location by key");
            console.log(action.location); 
            return action.location;
        default:
            return state; 
    }
}

export default locationReducer; 