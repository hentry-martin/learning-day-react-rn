import React from 'react';
import Button from '@goeuro/frontend-components/lib/Button';
import mount from '../../utils/test';
import App from './App.native';

describe('<App />', () => {
	it('should call callback on click', () => {
		const onSignIn = jest.fn();
		const wrapper = mount(<App onSignIn={onSignIn} />);

		wrapper.find(Button).simulate('click');

		expect(onSignIn).toHaveBeenCalledTimes(1);
	});
});
