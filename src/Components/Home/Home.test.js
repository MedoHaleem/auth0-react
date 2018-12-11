import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';


describe('Profile', () => {
    it('Should render fine', () => {
        const props = {
            auth: {
                isAuthenticated: () => false
            }
        };
        const wrapper = shallow(<Home {...props}/>);
        expect(wrapper.find('h1').length).toEqual(1);
    });
    it('Should show login button', () => {
        const props = {
            auth: {
                isAuthenticated: () => false
            }

        };
        const wrapper = shallow(<Home {...props}/>);
        expect(wrapper.find('.button').length).toEqual(1);
    });
    it('Should not show login button and instead show view profile', () => {
        const props = {
            auth: {
                isAuthenticated: () => true
            }

        };
        const wrapper = shallow(<Home {...props}/>);
        expect(wrapper.find('.button').length).toEqual(0);
        expect(wrapper.find(`#profile`).length).toEqual(1);
    });
});
