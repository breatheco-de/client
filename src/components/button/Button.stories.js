import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import '../../styles.scss'

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Button',
  associated_slug: 'react',
};

export const actionsData = {
  onChange: action('onChange'),
};

export const Default = () => <Button { ...taskData } {...actionsData}>Click me</Button>;