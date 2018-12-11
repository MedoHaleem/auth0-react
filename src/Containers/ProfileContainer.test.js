import React from 'react';
import ProfileContainer from './ProfileContainer';
import {shallow} from 'enzyme';

describe('ProfileContainer', () => {
    it('Should render and invoke correct Action', () => {
        let state = {
            profile: null
        };
        const props = {
            auth: {
                isAuthenticated: () => true,
                getAccessToken: () => 123456789,
                getProfile: jest.fn().mockImplementation(() => Promise.resolve({nickName: "Medo"}))
            }
        };

        shallow(<ProfileContainer {...props} {...state}/>);
        expect(props.auth.getProfile).toHaveBeenCalled();
    });
});