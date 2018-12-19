import React from 'react';
import CustomerList from './CustomerList';


function Customers({loading, error, customers}) {
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
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