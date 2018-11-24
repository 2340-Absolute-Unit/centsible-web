import React from 'react';
import { firestoreConnect } from 'react-redux-firebase'; 
import { connect } from 'react-redux';
import { compose } from 'redux';
import './Location.css';
import { Link } from 'react-router-dom';

class Location extends React.Component {
    render() {
        return (
            <div className="locations">
                <h2> Locations </h2> 
                <ul className="locationList">
                    {this.props.locations && 
                    this.props.locations.map((location) => 
                        <Link to={'/location/' + location.id} key={location.id}>
                            <li className="location" key={location.id}> {location.name} </li>
                        </Link>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.firestore.ordered.locations
    }
}

export default (compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'locations' }
    ])
)(Location))
