import React from 'react';

const CustomerListRow = ({customer}) => {
    return (
        <tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
            <td>{customer.status}</td>
        </tr>
    );
};



export default CustomerListRow;
