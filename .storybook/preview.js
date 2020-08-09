import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => {
  return withConsole()(storyFn)(context);
});

addParameters({
  options: {
    showRoots: true,
  },
  backgrounds: [
    { name: 'White', value: '#FFFFFF', default: true },
    { name: 'Light', value: '#CDCED9' },
    { name: 'Dark', value: '#6E7486' },
  ],
});

const loaderFn = () => {
  const allExports = [require('./welcome.stories.mdx')];
  const fromSrc = require.context('../packages', true, /\.stories\.js?$/);
  fromSrc.keys().forEach((story) => allExports.push(fromSrc(story)));

  return allExports;
};

configure(loaderFn, module);
