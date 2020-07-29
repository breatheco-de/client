import React from 'react';
import { action } from '@storybook/addon-actions';
import Indicator from './index';
import '../../styles.scss'

export default {
  component: Indicator,
  title: 'Indicator',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Indicator',
  history: [97,63,35,49,97,63,35,49,44,35,25,10,63,35,49],
  height: "72px",
  color: "#cdedca",
  width: "150px",
  value: '12',
};

export const actionsData = {
  onChange: action('onChange'),
};

export const Default = () => <Indicator { ...taskData } {...actionsData}>
  <h4>Pending</h4>
  <h3>12</h3>
</Indicator>;