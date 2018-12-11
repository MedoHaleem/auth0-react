 import React, { Component } from 'react';
import Customers from '../Components/Customers/Customers'

 class CustomersContainer extends Component {
     state = {
         customers: [],
         loading: true,
         error: ""
     };

     componentDidMount() {
         fetch("/customers", {headers: {Authorization: `Bearer ${this.props.auth.getAccessToken()}`}})
             .then(response => {
                 this.setState({loading: false});
                 if (response.ok) return response.json();
                 throw new Error(`Status ${response.status}: ${response.statusText}`);
             }).then(response => this.setState({customers: response.customers}))
             .catch(error => this.setState({loading: false, error: error.message}));
     }

     render() {
         return <Customers {...this.state} />
         }
     }

 export default CustomersContainer