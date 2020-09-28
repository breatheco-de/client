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

const options = [{ label: "Javascript", value: "javascript" }, { label: "Python", value: "python" }, { label: "React", value: "react" }, { label: "Bootstrap", value: "bootstrap" }, { label: "Html", value: "html" }, { label: "CSS", value: "css" }]

export const Default = () => <Dropdown
                                       options={options}
                                       name="form-field-name"
                                       placeholder="Select your favorite"/>

