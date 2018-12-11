import React from 'react';
import {shallow, mount} from 'enzyme';
import Customers from './Customers';

describe('Customers', () => {
    it('Shows a loading bar when loading', () => {
        const props = {
            loading: true
        };
        const wrapper = shallow(<Customers {...props}/>);
        expect(wrapper.find('.loading').length).toEqual(1);
    });
    it('Shows a error message when error occurs', () => {
        const props = {
            error: {
                "message": "Something went wrong"
            }
        };
        const wrapper = shallow(<Customers {...props}/>);
        expect(wrapper.find('.error').length).toEqual(1);
    });
    it('Shows a list of customers', () => {
        const props = {
            customers: [
                {id: 1, name: "test", phone: "123-456-789", email: "test@test.com", address: "Test at McTest Street", status: "Hot" },
                {id: 2, name: "test", phone: "123-456-789", email: "test@test.com", address: "Test at McTest Street", status: "Hot" },
            ]
        };
        const wrapper = mount(<Customers {...props}/>);
        expect(wrapper.find('.customers').length).toEqual(1);
        expect(wrapper.find('.customer').length).toEqual(2);
    });
});
