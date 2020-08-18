import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './index';
import '../../styles.scss'

export default {
  component: Checkbox,
  title: 'Checkbox',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Checkbox',
};

export const actionsData = {
  onChange: action('onChange'),
};

export const Default = () => <Checkbox { ...taskData } {...actionsData} />;
export const WithLabel = () => <Checkbox { ...taskData } {...actionsData}>Check me</Checkbox>;