import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import { Link } from 'react-router-dom';
import './Donation.css';
 
class Donation extends React.Component {

    render() {
        const { donations } = this.props;
        return (
            <div className="donations">
                <h2> Donations </h2>
                <ul className="donationList">
                    {donations && donations.map((donation) =>
                        <Link to={'/donation/' + donation.id} key={donation.id}>
                            <li className="donation" key={donation.id}> {donation.name} </li>
                        </Link>
                    )}
                </ul>
                <div>
                    <Link to='/addDonation'>
                        <button className="btn btn-primary"> Add Donation </button>
                    </Link>
                </div>
                <div>
                    <Link to='/donationSearch'>
                        <button className="btn btn-primary"> Search Donations </button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.firestore.ordered.locations, 
        donations: state.firestore.ordered.donations
    }
}

export default (compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'donations'}
    ])
)(Donation))
