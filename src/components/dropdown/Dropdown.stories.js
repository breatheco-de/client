import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './index';
import '../../styles.scss';

export default {
    component: Dropdown,
    title: 'Dropdown',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Dropdown',
    associated_slug: 'react',
};

export const actionsData = {
    onChange: action('onChange'),
};

export const Default = () => <Dropdown />

