import React, { Component, ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../../../translations/en.json'

interface Props {
	children?: ReactNode;
}

class LocaleProvider extends Component<Props> {
	render() {
		return (
			<IntlProvider locale="en" messages={messages}>
				{this.props.children}
			</IntlProvider>
		);
	}
}

export default LocaleProvider
