import React from 'react';
import {shallow, mount} from 'enzyme';
import Profile from './Profile';


describe('Profile', () => {
    it('Shows nothing when profile is empty', () => {
        const props = {
            profile: null
        };
        const wrapper = shallow(<Profile {...props}/>);
        expect(wrapper.find('#name').length).toEqual(0);
    });
    it('Shows Profile', () => {
        const props = {
            profile: {nickName: "Medo"},
            auth: {getAccessToken: () => {return "123456789"}}

        };
        const wrapper = shallow(<Profile {...props}/>);
        expect(wrapper.find('#name').length).toEqual(1);
    });
});
