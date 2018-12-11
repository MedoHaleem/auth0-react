import React from 'react';
import CustomersContainer from './CustomersContainer';
import {shallow, mount} from 'enzyme';

describe('CustomersContainer', () => {
    it('Should render', () => {
        const props = {
            loading: false,
            customers: [],
            auth: {
                getAccessToken: () => 123456789
            }
        };

        const wrapper = shallow(<CustomersContainer {...props}/>);

        expect(wrapper.find('Customers').length).toEqual(1);
    });
});