import React from 'react'; 
import LocationMap from './LocationMap'; 
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class MapHolder extends React.Component {
    render() {
        const locations = this.props.locations;
        return (
        <LocationMap
            isMarkerShown={true}
            locations={locations}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.firestore.ordered.locations,
    }
}

export default (compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'locations' }
    ])
)(MapHolder))