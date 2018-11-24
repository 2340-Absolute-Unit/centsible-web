import React from 'react';
import { connect } from 'react-redux'; 
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getLocation } from '../actions/locationActions'; 


class DonationDetails extends React.Component {
    render() {
        if (this.props.donation) {
            return ( 
                <div>
                    <h2>{this.props.donation.name}</h2> 
                    <p> Category: {this.props.donation.category} </p>
                    <p> Last Updated: {this.props.donation.lastUpdated.toString()} </p>
                    <p> Short Description: {this.props.donation.shortDescription} </p>
                    <p> Long Description: {this.props.donation.longDescription} </p>
                    <p> Location: {this.props.location.name} </p>
                </div>
            )
        } else {
            return null;
        }
        
    }
    componentDidUpdate(prevProps) {
        if (prevProps.donation !== this.props.donation) {
            if (this.props.donation) {
                this.props.getLocation(this.props.donation.location);
            }
        }
    }

    componentDidMount() {
        if (this.props.donation) {
            this.props.getLocation(this.props.donation.location);
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const donations = state.firestore.data.donations;
    const donation = donations ? donations[id] : null;
    return {
        donation: donation,
        auth: state.firebase.auth, 
        location: state.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLocation: (key) => dispatch(getLocation(key))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'donations'
        }
    ])
)(DonationDetails);
