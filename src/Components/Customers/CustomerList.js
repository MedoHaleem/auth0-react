import React from 'react';
import PropTypes from "prop-types";
import CustomerListRow from './CustomerListRow';

const CustomerList = ({customers}) => {
    return (
        <table className="customers">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {customers.map(customer =>
                <CustomerListRow key={customer.id} customer={customer}/>
            )}
            </tbody>
        </table>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired
};

export default CustomerList;
