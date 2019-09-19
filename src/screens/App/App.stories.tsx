import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '../../utils/storybook';

import App from './App';

storiesOf('App', module)
	.add('Variation 1', () => <App onSignIn={action('signIn')} />);
