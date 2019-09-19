import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import App from './App.native';

storiesOf('App', module)
	.add('Variation 1', () => <App onSignIn={action('signIn')} />);
