import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@goeuro/frontend-components/lib/Container';
import ContainerHeader from '@goeuro/frontend-components/lib/ContainerHeader';
import ContainerSection from '@goeuro/frontend-components/lib/ContainerSection';
import InputFormGroup from '@goeuro/frontend-components/lib/InputFormGroup';
import Button from '@goeuro/frontend-components/lib/Button';
import { InputWrapper } from './styles';
import AppProps from './App.props';

const App = ({ onSignIn }: AppProps) => (
	<Container>
		<ContainerHeader>
			<FormattedMessage id="headerText" />
		</ContainerHeader>
		<ContainerSection>
			<InputWrapper>
				<InputFormGroup label="Username" />
			</InputWrapper>
			<InputWrapper>
				<InputFormGroup label="Password" />
			</InputWrapper>
			<Button onClick={onSignIn}>Sign in</Button>
		</ContainerSection>
	</Container>
);

export default App;
