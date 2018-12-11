import React from 'react';
import {shallow} from 'enzyme';
import Nav from './Nav';


describe('Navigation', () => {
    it('Should render fine', () => {
        const props = {
            auth: {
                isAuthenticated: () => false
            }
        };
        const wrapper = shallow(<Nav {...props}/>);
        expect(wrapper.find('ul').length).toEqual(1);
    });
    it('Should show login link', () => {
        const props = {
            auth: {
                isAuthenticated: () => false
            }

        };
        const wrapper = shallow(<Nav {...props}/>);
        expect(wrapper.contains(<a href="#">Log In </a>)).toEqual(true);
    });
    it('Should show logout', () => {
        const props = {
            auth: {
                isAuthenticated: () => true
            }

        };
        const wrapper = shallow(<Nav {...props}/>);
        expect(wrapper.contains(<a href="#"> Log Out </a>)).toEqual(true);
    });
});
