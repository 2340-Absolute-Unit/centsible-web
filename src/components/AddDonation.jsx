import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import { createDonation } from '../actions/donationActions'
import { Redirect } from 'react-router-dom';

class AddDonation extends React.Component {
    constructor(props) {
        super(props); 
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.cancel = this.cancel.bind(this); 
        this.state = { 
            name: '', 
            category: '', 
            shortDescription: '', 
            longDescription: '', 
            value: '',
            location: '1'
        }
    }
    
    render() {
        return (
            <div className="donationForm">
            <h2> Add a new donation </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Category:
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    </label>
                    <label>
                        Short Description:
                        <input type="text" name="shortDescription" value={this.state.shortDescription} onChange={this.handleChange} />
                    </label>
                    <label>
                        Long Description:
                        <input type="text" name="longDescription" value={this.state.longDescription} onChange={this.handleChange} />
                    </label>
                    <label>
                        Value:
                        <input type="number" name="value" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Location: 
                        <select name="location" value={this.state.location} onChange={this.handleChange}> 
                            {this.props.locations && this.props.locations.map((location) => 
                                <option value={location.key} key={location.id}>{location.name}</option>)}
                        </select>

                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.cancel} className="btn btn-danger">Cancel</button>
            </div>
        )
    }

    cancel(event) {
        event.preventDefault(); 
        this.props.history.push('/donations');
    }
    
    handleChange(event) {
        const target = event.target; 
        const name = event.target.name; 
        const value = target.value; 

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault(); 
        this.props.createDonation(this.state);
        this.props.history.push('/donations');
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.firestore.ordered.locations,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDonation: (donation) => dispatch(createDonation(donation))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'locations'
    }])
)(AddDonation)