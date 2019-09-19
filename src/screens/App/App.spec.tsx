import React from 'react';
import mount from '../../utils/test';
import App from './App';

describe('<App />', () => {
	it('should call callback on click', () => {
		const onSignIn = jest.fn();
		const wrapper = mount(<App onSignIn={onSignIn} />);

		wrapper.find('button').simulate('click');

		expect(onSignIn).toBeCalled();
	});
});
