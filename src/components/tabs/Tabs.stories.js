import React from 'react';
import { action } from '@storybook/addon-actions';
import Tabs from './index';
import '../../styles.scss';

export default {
    component: Tabs,
    title: 'Tabs',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Tabs',
    associated_slug: 'react',
};

export const actionsData = {
    onChange: action('onChange'),
}

