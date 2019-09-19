import React, { ReactElement } from 'react'
import { mount as baseMount } from 'enzyme'
import LocaleProvider from '../../components/LocaleProvider'

const mount = (element: ReactElement) => {
	const wrapper = baseMount(<LocaleProvider>{element}</LocaleProvider>);

	return wrapper;
}

export default mount
