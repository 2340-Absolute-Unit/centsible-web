import React from 'react'; 
import { connect } from 'react-redux'; 
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class LocationDetails extends React.Component {

    render() {
        const {location, auth} = this.props
        if (auth.isEmpty) {
            return <Redirect to='/' />
        }
         if (location) {
            return (
                <div>
                    <h1>{location.name} </h1>
                    <p> Phone: {location.phone} </p> 
                    <p> Street Address: {location.street_address} </p>
                    <p> City: {location.city} </p>
                    <p> State: {location.state} </p>
                    <p> Zip: {location.zip} </p>
                    <p> Type: {location.type} </p>
                    <p> Geopoint: {location.geopoint.latitude}, {location.geopoint.longitude}</p>
                </div>
                
            )    
        } else {
            return null
        }
        
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const locations = state.firestore.data.locations;
    const location = locations ? locations[id] : null;
    return {
        location: location,
        auth: state.firebase.auth
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'locations'
    }])
)(LocationDetails);
