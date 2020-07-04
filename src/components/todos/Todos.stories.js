import React from 'react';
import { action } from '@storybook/addon-actions';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  associated_slug: 'react',
};

export const actionsData = {
  onChange: action('onChange'),
};

export const Default = () => <Task { ...taskData } {...actionsData} />;