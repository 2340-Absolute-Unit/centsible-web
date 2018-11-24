const initState = {
    nameFilter: "", 
    categoryFilter: "", 
    locationFilter: ""
}
const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_FILTERS':
            return action.filter; 
        default:
            return state; 
    }
}

export default searchReducer; 