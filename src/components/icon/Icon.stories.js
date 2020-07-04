import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Icon, { icons, sizes } from './index';

export default {
  component: Icon,
  title: 'Icon',
  // Our exports that end in "Data" are not stories.
  excludeStories: /(props)|(actions)$/,
  decorators: [withKnobs]
};

let options = {}
Object.keys(icons).forEach(k => options[k] = k)

let sizeOptions = {}
Object.keys(sizes).forEach(k => sizeOptions[k] = k)
export const props = {
  name: select("name", options, "github"),
  size: select("size", sizeOptions, "md"),
};

export const actions = {
//   onChange: action('onChange'),
};

export const Default = () => <Icon {...props} {...actions} />;