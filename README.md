This project was bootstrapped with [fe-scripts](https://github.com/goeuro/fe-scripts).

## Available scripts

### `yarn start-web`

Starts storybook for web. Storybook will look for stories in files following `.stories.tsx` pattern.

### `yarn start-rn`

Starts storybook for RN. Storybook will look for stories in files following `.stories.tsx` pattern.

### `yarn build-web`

Compiles TypeScript to ES6.

### `yarn lint`

Runs `ESLint` with the help of a [typescript parser](https://github.com/typescript-eslint/typescript-eslint) to check your project. Adding it as a PR-check is a good practice.

## Development

### Storybook

#### Adding decorators to Stories

Create a `storybook.config.tsx` file on the root of `src` folder and export an array of decorators you want to be load. Example:

```javascript
//src/storybook.config.tsx

import React from 'react';
import { RenderFunction } from '@storybook/react';
import Button from '@goeuro/frontend-components/lib/Button';

const withAnnoyingButton = (story: RenderFunction) => (
	<React.Fragment>
		<Button>Click me!</Button>
		{story()}
	</React.Fragment>
);

export const decorators = [withAnnoyingButton];
```

In case there is no config defined for Storybook, `fe-scripts` will create an empty configuration for it. Remember that you can differentiate between the configuration of Storybook for Web and React Native by using a different file extension, `.tsx` for web and `.native.tsx` for React Native.

### Configuring ES lint to run with your IDE

By default your `ESLint` extension (VS code, IntelliJ, etc.) only checks for `.js` and `.jsx` files so we need to change the configuration of our editor in order to enable in editor warnings. Go to your editor settings (in VS code is `settings.json`) and add add this line:

```json
{
	"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

For more information, please check [this issue](https://github.com/typescript-eslint/typescript-eslint/issues/326).
