import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import './Donation.css';
import DonationSearchResults from './DonationSearchResults';
import { filterDonations } from '../actions/donationActions';
 
class DonationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameFilter: "", 
            categoryFilter: "",
            locationFilter: "1"
        }
        this.handleChange = this.handleChannge.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChannge(event) {
        const name = event.target.name;
        const value = event.target.value; 

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault(); 
        this.props.filterDonations(this.state);
    }

    render() {
        const { donations } = this.props;
        return (
            <div className="donations">
                <h2> Donation Search </h2>
                <div className="search">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="nameFilter" 
                                value={this.state.nameFilter} 
                                onChange={this.handleChange} />
                        </label>
                        <label>
                            Category:
                            <input type="text" name="categoryFilter" value={this.state.categoryFilter} onChange={this.handleChange} />
                        </label>
                        <label>
                            Location: 
                            <select name="locationFilter" value={this.state.locationFilter} onChange={this.handleChange} > 
                                {this.props.locations && this.props.locations.map((location) => 
                                    <option value={location.key} key={location.id}>{location.name}</option>)}
                                    <option value="">All </option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
                <DonationSearchResults
                    donations={donations} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nameFilter: state.donationSearch.nameFilter, 
        locationFilter: state.donationSearch.locationFilter,
        categoryFilter: state.donationSearch.categoryFilter, 
        donations: state.firestore.ordered.donations,
        locations: state.firestore.ordered.locations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterDonations: (filters) => dispatch(filterDonations(filters))
    }
}
export default (compose(
    connect(mapStateToProps, mapDispatchToProps), 
    firestoreConnect((props) => [
        { 
            collection: 'donations', 
            where: [
                props.nameFilter ? ['name', '==', props.nameFilter]: [], 
                props.locationFilter ? ['location', '==', props.locationFilter] : [],
                props.categoryFilter ? ['category', '==', props.categoryFilter] : []
            ]
        }, 
        {
            collection: 'locations'
        }
    ]),
    
)(DonationSearch))
