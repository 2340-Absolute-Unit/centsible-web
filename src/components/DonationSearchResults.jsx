import React from 'react';
import { Link } from 'react-router-dom';
 
class DonationSearchResults extends React.Component {

    render() {
        const { donations } = this.props;

        if (donations && donations.length === 0) {
            return (
                <div>
                    No results found
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        {donations && donations.map((donation) =>
                            <Link to={'/donation/' + donation.id} key={donation.id}>
                                <li className="donation" key={donation.id}> {donation.name} </li>
                            </Link>
                        )}
                    </ul>
                </div>
            )
        }
        
    }
}

export default DonationSearchResults;