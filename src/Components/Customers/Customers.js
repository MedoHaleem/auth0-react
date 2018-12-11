import React from 'react';
import CustomerList from './CustomerList';


function Customers({loading, error, customers}) {
    if (loading) {
        return <div className="loading"/>;
    }
    if (error) {
        return <div className="error"/>;
    }
    return (
        <div>
            <h1>Customers:</h1>
            <hr/>
            <CustomerList customers={customers}/>
        </div>
    );
}

export default Customers;