import React, {Component} from 'react';
import CustomerList from './CustomerList';

class Customers extends Component {
    state = {
        customers: [],
        error: ""
    };

    componentDidMount() {
        fetch("/customers", {headers: {Authorization: `Bearer ${this.props.auth.getAccessToken()}`}})
            .then(response => {
                if (response.ok) return response.json();
                throw new Error(`Status ${response.status}: ${response.statusText}`);
            }).then(response => this.setState({customers: response.customers}))
            .catch(error => this.setState({error: error.message}));
    }


    render() {
        return (
            <div>
                <h1>Customers:</h1>
                <hr/>
                <CustomerList customers={this.state.customers}/>
                {this.state.error}
            </div>
        );
    }
}

export default Customers;